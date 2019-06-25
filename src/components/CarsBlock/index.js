import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCars } from "../../actions/cars";
import CarsList from "./components/CarsList/index";

class CarsBlock extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }
  render() {
    console.log(this.props);
    return (
      <Col md={9} className="carsBlock">
        <Row>
          <Col xs={12} md={8}>
            <h6 style={{ marginTop: "0.5em" }}>Available Cars</h6>
            <p style={{ marginTop: "1em" }}>Showing 10 of 100 results</p>
          </Col>
          <Col xs={6} md={4}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Color</Form.Label>
              <Form.Control as="select">
                <option value="" selected disabled>
                  Sort by
                </option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <CarsList />
      </Col>
    );
  }
}
const mapStateToProps = state => ({
  cars: state.cars.data.cars
});

export default connect(
  mapStateToProps,
  { fetchCars }
)(CarsBlock);
