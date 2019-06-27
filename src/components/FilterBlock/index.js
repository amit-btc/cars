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
  selectedColor = "";
  selectedManufacturer = "";

  componentDidMount() {
    this.props.fetchColors();
    this.props.fetchManufacturers();
  }
  onChange = event => {
    this[event.target.name] = event.target.value;
  };
  filterCars = () => {
    this.selectedColor && this.props.setColor(this.selectedColor);
    this.selectedManufacturer &&
      this.props.setManufacturer(this.selectedManufacturer);
  };
  render() {
    const { manufacturers, colors } = this.props;
    return (
      <Col md={3} className="filterBox">
        {colors && (
          <Form.Group>
            <Form.Label>Color</Form.Label>
            {/* Use defaultValue={'DEFAULT'}  to get rid of warning */}
            <Form.Control as="select" defaultValue={'DEFAULT'} onChange={this.onChange} name="selectedColor">
              <option value="DEFAULT" disabled>
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
              defaultValue={'DEFAULT'}
              name="selectedManufacturer"
            >
              <option value="DEFAULT" disabled>
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
          onClick={this.filterCars}
        >
          Filter
        </Button>
      </Col>
    );
  }
}
const mapStateToProps = state => ({
  manufacturers: state.filters.manufacturers.manufacturers,
  colors: state.filters.colors
});

export default connect(
  mapStateToProps,
  { fetchManufacturers, fetchColors, setManufacturer, setColor }
)(FilterBlock);
