import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import BallUp from "./Ball-Up";

ReactDOM.render(
  <Router>
    <BallUp />
  </Router>,
  document.querySelector("#root")
);
