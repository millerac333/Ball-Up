import React, { Component } from "react";
import "./Login.css";
// import GeneralManager from "../../modules/GeneralManager";
import BallersManager from "../../modules/BallersManager";

export default class Login extends Component {
  // Set initial state
  state = {
    ballername: "",
    password: ""
  };
  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  // Simplistic handler for login submit
  handleLogin = e => {
    e.preventDefault();

    BallersManager.getAllData(
      `ballers?ballername=${this.state.ballername}`
    ).then(baller => {
      if (
        baller.length === 0 ||
        baller[0].ballername !== this.state.ballername
      ) {
        alert("Empty value or incorrect/unregistered Baller, try again");
        return;
      }
      if (baller.length === 0 || baller[0].password !== this.state.password) {
        alert("The password you entered is incorrect; please try again");
        return;
      } else if (
        baller[0].ballername === this.state.ballername &&
        baller[0].password === this.state.password
      ) {
        sessionStorage.setItem("currentUser", baller[0].id);
        console.log(
          "currentUser id",
          baller[0].id,
          "currentUserName",
          baller[0].ballername
        );
        localStorage.setItem(
          "credentials",
          JSON.stringify({
            ballername: this.state.ballername,
            password: this.state.password
          })
        );
        this.props.history.push("/");
      }
    });
    this.props.history.push("/");
  };
  signUpBaller = e => {
    e.preventDefault();

    BallersManager.getAllData(
      `ballers?ballername=${this.state.ballername}`
    ).then(baller => {
      if (
        baller.length === 0 ||
        baller[0].ballername !== this.state.ballername
      ) {
        alert(
          "Sorry, the Ballername is taken. Please try a different Ballername"
        );
        return;
      }

      BallersManager.add({
        ballername: this.state.ballername,
        password: this.state.password
      }).then(logNewBaller => {
        sessionStorage.setItem("currentUser", logNewBaller.id);
        console.log("logNewBaller", logNewBaller.id);

        localStorage.setItem(
          "credentials",
          JSON.stringify({
            ballername: this.state.ballername,
            password: this.state.password
          })
        );
        this.props.history.push("/");
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="loginForm" onSubmit={this.handleLogin}>
          <h1 className="h1 mb-1 font-weight-normal">Ball-Up</h1>
          <h3 className="h3 mb-3 font-weight-normal">
            Please Log-in OR Sign-up
          </h3>
          <div className="form-group">
            <label htmlFor="ballername">Ballername</label>
            <input
              onChange={this.handleFieldChange}
              type="text"
              id="ballername"
              placeholder="Ballername"
              required=""
              autoFocus=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Log-In
          </button>
          <button
            type="button"
            className="btn-warning"
            onClick={e => this.signUpBaller(e)}
          >
            Sign-Up to Ball-Up
          </button>
        </form>
      </React.Fragment>
    );
  }
}
