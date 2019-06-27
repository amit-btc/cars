import React from "react";
import { Container, Row } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store/store";
import NavBar from "./components/navbar/index";
import FilterBlock from "./components/FilterBlock/index";
import CarsBlock from "./components/CarsBlock/index";
import CarItem from "./components/CarItem/index";
import NoMatch from "./components/NoMatch/index";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const Home = () => {
  return (
    <Container>
      <Row>
        <FilterBlock />
        <CarsBlock />
      </Row>
    </Container>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch> 
            <Route exact path="/" component={Home} />
            <Route exact path="/cars" component={Home} />
            <Route path="/cars/:stockNumber" component={CarItem} />
            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
