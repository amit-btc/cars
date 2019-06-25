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
    this.props.fetchColors();
    this.props.fetchManufacturers();
  }
  onChange = event => {
    event.target.name === "setColor"
      ? this.props.setColor(event.target.value)
      : this.props.setManufacturer(event.target.value);
  };
  render() {
    const { manufacturers, colors } = this.props;
    return (
      <Col md={3} className="filterBox">
        {colors && (
          <Form.Group>
            <Form.Label>Color</Form.Label>
            <Form.Control as="select" onChange={this.onChange} name="setColor">
              <option value="" disabled>
                All Car Colors
              </option>
              {colors.map((item, id) => (
                <option value={item} key={id}>
                  {item}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        )}
        {manufacturers && (
          <Form.Group>
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              as="select"
              onChange={this.onChange}
              name="setManufacturer"
            >
              <option value="" disabled>
                All Manufacturers
              </option>
              {manufacturers.map((item, id) => (
                <option value={item.name} key={id}>
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
});

export default connect(
  mapStateToProps,
  { fetchManufacturers, fetchColors, setManufacturer, setColor }
)(FilterBlock);
