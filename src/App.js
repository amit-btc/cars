import React from "react";
import { Container, Row } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store/store";
import NavBar from "./components/navbar/index";
import FilterBlock from "./components/FilterBlock/index";
import CarsBlock from "./components/CarsBlock/index";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <NavBar />
        <Container>
          <Row>
            <FilterBlock />
            <CarsBlock />
          </Row>
        </Container>
      </React.Fragment>
    </Provider>
  );
}

export default App;
