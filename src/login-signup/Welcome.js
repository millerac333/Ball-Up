import React, { Component } from "react";
import LoginForm from "grommet/components/LoginForm";

export default class Login extends Component {
  state = { clicked: "", password: "" };

  addNewBaller = event => {
    event.preventDefault();
    const ballername = event.target.Ballername.value;
    const password = event.target.Password.value;

    fetch("http://localhost:3333/ballers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        ballername: ballername,
        password: password
      })
    })
      // When DELETE is finished, retrieve the new list of ballers
      .then(a => a.json())
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:3333/ballers");
      })
      // Once the new array of ballers is retrieved, set the state
      .then(a => a.json())
      // .then(this.props.setTheState)
      .then(this.setState({ clicked: "" }));
  };

  render() {
    return (
      <React.Fragment>
        <LoginForm
          onSubmit={<addNewBaller />}
          rememberMe={true}
          title="Ball-Up"
          usernameType="text"
        />
      </React.Fragment>
    );
  }
}
