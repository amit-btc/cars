import React from "react";
import { Col, Row } from "react-bootstrap";

export default function CarsListItem(props) {
  const item = props.data;
  return (
    <Row className="carBlockItem" key={item.stockNumber}>
      <Col sm={2}>
        <img src={item.pictureUrl} className="car-image" alt="auto1" />
      </Col>
      <Col sm={10}>
        <h5>{item.manufacturerName}</h5>
        <p style={{ color: "#333", fontSize: 12, marginBottom: 0 }}>
          Stock {item.stockNumber}- {item.mileage.number} {item.mileage.unit} -{" "}
          {item.fuelType} - {item.color}
        </p>
        <a href="/" style={{ fontSize: 12 }}>
          View Details
        </a>
      </Col>
    </Row>
  );
}
