import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import "./BallUp.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class BallUp extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <ApplicationViews />
      </React.Fragment>
    );
  }
}
