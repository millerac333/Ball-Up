import React, { Component } from "react";
import "./Login.css";
// import GeneralManager from "../../modules/GeneralManager";
import UsersManager from "../../modules/UsersManager";

export default class Login extends Component {
  // Set initial state
  state = {
    username: "",
    password: ""
  };
  // Update state whenever an input field is edited
  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };
  // Simplistic handler for login submit
  handleLogin = e => {
    e.preventDefault();

    UsersManager.getAllData(`users?username=${this.state.username}`).then(
      user => {
        if (user.length === 0 || user[0].username !== this.state.username) {
          alert("Empty value or incorrect/unregistered Baller, try again");
          return;
        }
        if (user.length === 0 || user[0].password !== this.state.password) {
          alert("The password you entered is incorrect; please try again");
          return;
        } else if (
          user[0].ballername === this.state.username &&
          user[0].password === this.state.password
        ) {
          sessionStorage.setItem("currentUser", user[0].id);
          console.log(
            "currentUser id",
            user[0].id,
            "currentUserName",
            user[0].username
          );
          localStorage.setItem(
            "credentials",
            JSON.stringify({
              username: this.state.username,
              password: this.state.password
            })
          );
          this.props.history.push("/");
        }
      }
    );
    this.props.history.push("/");
  };
  signUpUser = e => {
    e.preventDefault();

    UsersManager.getAllData(`users?username=${this.state.username}`).then(
      user => {
        if (user.length === 0 || user[0].username === this.state.username) {
          alert(
            "Sorry, the Ballername is taken. Please try a different Ballername"
          );
          return;
        }

        UsersManager.add({
          username: this.state.username,
          password: this.state.password
        }).then(logNewUser => {
          sessionStorage.setItem("currentUser", logNewUser.id);
          console.log("logNewUser", logNewUser.id);

          localStorage.setItem(
            "credentials",
            JSON.stringify({
              username: this.state.username,
              password: this.state.password
            })
          );
          this.props.history.push("/");
        });
      }
    );
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
            <label htmlFor="username">Ballername</label>
            <input
              onChange={this.handleFieldChange}
              type="text"
              id="username"
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
            onClick={e => this.signUpUser(e)}
          >
            Sign-Up to Ball-Up
          </button>
        </form>
      </React.Fragment>
    );
  }
}
