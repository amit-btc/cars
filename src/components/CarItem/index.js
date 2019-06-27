import React, { Component } from "react";
import { Col, Row, Container, Button, Table } from "react-bootstrap";

export default class CarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {},
      isLoading: false
    };
  }

  fetchCarDetails = () => {
    const stockNumber = Number(this.props.location.pathname.split("/")[2]);
    const url = `http://localhost:3001/cars/${stockNumber}`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ car: data.car, isLoading: false }));
  };

  componentWillMount() {
    this.setState({ isLoading: true }, this.fetchCarDetails);
  }

  saveCarToFavourites = () => {
    localStorage.setItem(
      this.state.car.stockNumber,
      this.state.car.manufacturerName
    );
    this.forceUpdate(); // to fetch localstorage again
  };

  DeleteFromStorage = stockNumber => {
    localStorage.removeItem(stockNumber);
    this.forceUpdate(); // to fetch localstorage again
  };
  render() {
    const { car, isLoading } = this.state;
    return isLoading ? (
      <div />
    ) : (
      <Container fluid>
        <Row key={car.stockNumber}>
          <Col xs={12} style={{ backgroundColor: "#eee" }}>
            <img src={car.pictureUrl} className="car-image" alt="auto1" />
          </Col>
          <Container>
            <Row>
              <Col xs={8} style={{ marginTop: "2em" }}>
                <h1>{car.manufacturerName}</h1>
                <br />
                <p style={{ color: "#333", fontSize: 20, marginBottom: 0 }}>
                  Stock {car.stockNumber}- {car.mileage.number}{" "}
                  {car.mileage.unit} - {car.fuelType} - {car.color}
                </p>
                <br />
                <p>
                  This car is currently available and can be delivered as soon
                  as tomorrow morning. Please be aware that delivery times shown
                  in this page are not definitive and may change due to bad
                  weather conditions.
                </p>
              </Col>
              <Col xs={4}>
                <div className="saveCarBlock">
                  <p>
                    If you like this car, click the button and save it in your
                    collection of favourite items.
                  </p>
                  <Button
                    variant="primary"
                    className="primaryButton"
                    style={{ float: "right" }}
                    onClick={this.saveCarToFavourites}
                  >
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <h2>Favourites</h2>
            <br />
            <Table bordered style={{ marginBottom: 200 }}>
              <thead>
                <tr>
                  <th>Stock Number</th>
                  <th>Name</th>
                  <th>Remove Item</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(localStorage).map(item => {
                  return (
                    <tr key={item}>
                      <td>{item}</td>
                      <td>{localStorage.getItem(item)}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={()=>{this.DeleteFromStorage(item)}}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Row>
      </Container>
    );
  }
}
