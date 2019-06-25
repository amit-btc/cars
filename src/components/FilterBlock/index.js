import React, { Component } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  fetchColors,
  fetchManufacturers,
  setManufacturer,
  setColor
} from "../../actions/filters";

class FilterBlock extends Component {
  componentDidMount() {
    // this.props.fetchColors();
    console.log("componentDidMount",this.props.isFetching);
    this.props.fetchManufacturers();
  }
  render() {
    const { manufacturers, colors } = this.props;
    return (
      <Col md={3} className="filterBox">
        {colors && (
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Color</Form.Label>
            <Form.Control as="select">
              <option value="" disabled>
                All Car Colors
              </option>
              {colors.map((item, id) => (
                <option value="item" key={id}>
                  {item}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        )}
        {manufacturers && (
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control as="select">
              <option value="" disabled>
                All Manufacturers
              </option>
              {manufacturers.map((item, id) => (
                <option value="item" key={id}>
                  {item.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        )}
        <Button
          variant="primary"
          className="primaryButton"
          style={{ float: "right" }}
        >
          Filter
        </Button>
      </Col>
    );
  }
}
const mapStateToProps = state => ({
  manufacturers: state.filters.manufacturers.manufacturers,
  colors: state.filters.colors,
  isFetching:state.filters.isFetching,
});

export default connect(
  mapStateToProps,
  { fetchManufacturers }
)(FilterBlock);
