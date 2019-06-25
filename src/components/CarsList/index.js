import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCars } from "../../actions/cars";

class CarsList extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }
  render() {
    console.log(this.props);
    return (
      this.props.cars &&
      this.props.cars.map(item => (
        <Row className="carBlockItem" key={item.stockNumber}>
          <Col sm={2}><img
          src={item.pictureUrl}
          className="car-image"
          alt="auto1"
        /></Col>
          <Col sm={10}>
            <h5>{item.manufacturerName}</h5>
            <p style={{ color: "#333", fontSize: 12, marginBottom: 0 }}>
              Stock #12345 - 1000 KM - Petrol - Black
            </p>
            <a href="/" style={{ fontSize: 12 }}>
              View Details
            </a>
          </Col>
        </Row>
      ))
    );
  }
}
const mapStateToProps = state => ({
  cars: state.cars.data.cars
});

export default connect(
  mapStateToProps,
  { fetchCars }
)(CarsList);
