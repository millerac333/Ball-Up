import React from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import ReactDOM from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom";
import "./index.css";
import { BrowserRouter as Router } from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom";
import BallUp from "./Ball-Up";

ReactDOM.render(
  <Router>
    <BallUp />
  </Router>,
  document.querySelector("#root")
);
