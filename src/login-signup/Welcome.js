import React, { Component } from "react";
import LoginForm from "grommet/components/LoginForm";

export default class Login extends Component {
  state = { clicked: "", password: "" };

  // Update state whenever an input field is edited
  // handleFieldChange = evt => {
  //   const stateToChange = {};
  //   stateToChange[evt.target.id] = evt.target.value;
  //   this.setState(stateToChange);
  // };

  // Simplistic handler for login submit
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
      // When DELETE is finished, retrieve the new list of animals
      .then(a => a.json())
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:3333/ballers");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      // .then(this.props.setTheState)
      .then(this.setState({ clicked: "" }));
  };

  // formLauncher = () => {
  //   if (this.state.clicked === "") {
  //     this.setState({
  //       clicked: (
  //         <form onSubmit={this.addNewBaller}>
  //           <h1>Please sign in</h1>
  //           <label htmlFor="inputBallername" name="Ballername">
  //             Ballername
  //           </label>
  //           <input
  //             onChange={this.handleFieldChange}
  //             type="text"
  //             id="ballername"
  //             placeholder="Ballername"
  //             required=""
  //             autoFocus=""
  //             name="Ballername"
  //           />
  //           <label htmlFor="password" name="Password">
  //             Password
  //           </label>
  //           <input
  //             onChange={this.handleFieldChange}
  //             type="password"
  //             id="password"
  //             placeholder="Password"
  //             required=""
  //             name="Password"
  //           />
  //           <label>Remember Me</label>
  //           <button type="submit">Register</button>
  //         </form>
  //       )
  //     });
  //   } else {
  //     this.setState({ clicked: "" });
  //   }
  // };

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
