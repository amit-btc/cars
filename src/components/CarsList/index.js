import React, { Component } from "react";
import { connect } from "react-redux";
import CarsListItem from "./carListItem";
import { Pagination } from "react-bootstrap";
import Loader from "./loading";

class CarsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      totalPageCount: 0,
      totalCarsCount: 0,
      currentPage: 1,
      isLoading: false
    };
  }
  fetchCarsList = () => {
    const { manufacturer, color, sortAsc } = this.props;
    const sortBy = sortAsc ? "asc" : "des";
    fetch(
      `http://localhost:3001/cars?manufacturer=${manufacturer}&color=${color}&sort=${sortBy}&page=${
        this.state.currentPage
      }`
    )
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
    const { manufacturer, color, sortAsc } = this.props;
    if (
      prevProps.manufacturer !== manufacturer ||
      prevProps.color !== color ||
      prevProps.sortAsc !== sortAsc
    )
      this.setState({ isLoading: true }, this.fetchCarsList);
  }
  updatePage = newPageNumber => {
    this.setState(
      { isLoading: true, currentPage: newPageNumber },
      this.fetchCarsList
    );
  };
  render() {
    const { currentPage, totalPageCount, isLoading } = this.state;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  manufacturer: state.filters.manufacturer,
  color: state.filters.color,
  sortAsc: state.filters.sortAsc
});

export default connect(
  mapStateToProps,
  null
)(CarsList);
