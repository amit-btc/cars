import React, { Component } from "react";
import { Col, Row,Form } from "react-bootstrap";
import { connect } from "react-redux";
import CarsList from "../CarsList/index";

class CarsBlock extends Component {
  componentWillMount() {
  }
  render() {
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
                <option value="" disabled>
                  Sort by
                </option>
                <option>Mileage Ascending</option>
                <option>Mileage Descending</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <CarsList />
      </Col>
    );
  }
}
export default CarsBlock;
