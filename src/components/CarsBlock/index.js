import React, { Component } from "react";
import { connect } from "react-redux";
import CarsListItem from "./CarsListItem";
import { Col, Row, Form, Pagination } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Loader from "./loading";

class CarsBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      totalPageCount: 0,
      totalCarsCount: 0,
      currentPage: 1,
      isLoading: false,
      sortOrder: ""
    };
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search, {
      parseNumbers: true
    });
    // handle edge case http://localhost:3000/cars?page=100a
    const pageNumber = /^[0-9]\d*$/.test(values.page) ? values.page : 1;
    this.setState(
      { isLoading: true, currentPage: pageNumber },
      this.fetchCarsList
    );
  }

  fetchCarsList = () => {
    const { manufacturer, color } = this.props;
    const { currentPage, sortOrder } = this.state;

    const url = `http://localhost:3001/cars?manufacturer=${manufacturer}&color=${color}&sort=${sortOrder}&page=${currentPage}`;

    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          cars: data.cars,
          totalPageCount: data.totalPageCount,
          totalCarsCount: data.totalCarsCount,
          isLoading: false
        })
      );
  };
  componentDidUpdate(prevProps) {
    const { manufacturer, color } = this.props;
    if (prevProps.manufacturer !== manufacturer || prevProps.color !== color)
      this.setState(
        { isLoading: true, currentPage: 1, sortOrder: "" },
        this.fetchCarsList
      );
  }
  onChange = event => {
    this.setState(
      {
        sortOrder: event.target.value,
        isLoading: true
      },
      this.fetchCarsList
    );
  };
  updatePage = newPageNumber => {
    if (
      newPageNumber >= 1 &&
      newPageNumber <= this.state.totalPageCount &&
      newPageNumber !== this.state.currentPage
    )
      this.setState(
        { isLoading: true, currentPage: newPageNumber, cars: [] },
        this.fetchCarsList
      );
  };
  render() {
    const {
      currentPage,
      totalPageCount,
      totalCarsCount,
      isLoading
    } = this.state;
    return (
      <React.Fragment>
        <Col md={9} className="carsBlock">
          <Row>
            <Col xs={12} md={8}>
              <h6 style={{ marginTop: "0.5em" }}>Available Cars</h6>
              <p style={{ marginTop: "1em" }}>
                Showing{" "}
                {currentPage === totalPageCount
                  ? totalCarsCount
                  : currentPage * 10}{" "}
                of {totalCarsCount} results
              </p>
            </Col>
            <Col xs={6} md={4}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Sort By</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={"DEFAULT"}
                  onChange={this.onChange}
                >
                  <option value="DEFAULT" disabled>
                    Sort by
                  </option>
                  <option value="">None</option>
                  <option value="asc">Mileage Ascending</option>
                  <option value="des">Mileage Descending</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          {isLoading && <Loader />}
          {this.state.cars &&
            this.state.cars.map(item => (
              <CarsListItem data={item} key={item.stockNumber} />
            ))}
          <div>
            <Pagination className="pagination">
              <Pagination.First
                onClick={() => {
                  this.updatePage(1);
                }}
              >
                First
              </Pagination.First>
              <Pagination.Prev
                onClick={() => {
                  this.updatePage(currentPage - 1);
                }}
              >
                Prev
              </Pagination.Prev>
              <Pagination.Item active>
                Page {currentPage} of {totalPageCount}
              </Pagination.Item>
              <Pagination.Next
                onClick={() => {
                  this.updatePage(currentPage + 1);
                }}
              >
                Next
              </Pagination.Next>
              <Pagination.Last
                onClick={() => {
                  this.updatePage(totalPageCount);
                }}
              >
                Last
              </Pagination.Last>
            </Pagination>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  manufacturer: state.filters.manufacturer,
  color: state.filters.color
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CarsBlock)
);
