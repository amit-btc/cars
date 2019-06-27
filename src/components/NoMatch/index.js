import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NoMatch extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", margin: "10em auto" }}>
        <h1>404</h1>
        <br />
        <h5>
          Sorry, the page you are looking for does not exist. You can always go
          back to the <Link to="/">homepage.</Link>
        </h5>
      </div>
    );
  }
}
