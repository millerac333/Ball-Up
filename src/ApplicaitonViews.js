import React, { Component } from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./login-signup/Welcome";

export default class ApplicationViews extends Component {
  state = {
    ballers: [],
    courts: [],
    games: [],
    gamesJoined: []
  };
  // setBallersState = () => {
  //   API.getAll("ballers").then(baller => {
  //     this.setState({ ballers: baller });
  //   });
  // };
  // setCourtsState = () => {
  //   API.getAll("courts").then(court =>
  //     this.setState({
  //       courts: court
  //     })
  //   );
  // };
  // setGamesState = () => {
  //   API.getAll("games").then(game =>
  //     this.setState({
  //       games: game
  //     })
  //   );
  // };
  // deleteGames = id => {
  //   API.deleteItem("games", id).then(() => {
  //     this.setGamesState();
  //   });
  // };
  // setGamesJoinedState = () => {
  //   API.getAll("gamesJoined").then(gameJoined =>
  //     this.setState({
  //       gamesJoined: gameJoined
  //     })
  //   );
  // };
  // deleteGamesJoined = () => {
  //   API.deleteItem("gamesJoined", id).then(() => {
  //     this.setGamesJoinedState();
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <WelcomePage />;
          }}
        />;
        {/* <Route
          path="/courts"
          render={state => {
            return (
              <CourtsList
                courts={this.state.court}
                setCourtsState={this.setCourtsState}
              />
            );
          }}
        />;
        <Route
          exact
          path="/gamesJoinedList"
          render={state => {
            return (
              <gamesJoinedList
                gamesJoined={this.state.gameJoined}
                setGamesJoinedState={this.setGamesJoinedState}
                deleteGamesJoined={this.deleteGamesJoined}
              />
            );
          }}
        />;
        <Route
          exact
          path="/games"
          render={state => {
            return (
              <GamesList
                games={this.state.game}
                setGamesState={this.setGamesState}
                deleteGames={this.deleteGames}
              />
            );
          }}
        />; */}
      </React.Fragment>
    );
  }
}
