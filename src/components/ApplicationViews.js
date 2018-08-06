import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import BallersList from "./ballers/BallersList";
import CourtsList from "./courts/CourtsList";
import CourtForm from "./courts/CourtForm";
import GamesList from "./games/GamesList";
// import GameDetail from "./games/GameDetail";
import GameForm from "./games/GameForm";
import GamesJoinedList from "./games-joined/GamesJoinedList";
import GameJoinedDetail from "./games-joined/GameJoinedDetail";
import GamesManager from "../modules/GamesManager";
import JoinedGamesManager from "../modules/JoinedGamesManager";
import BallersManager from "../modules/BallersManager";
import CourtsManager from "../modules/CourtsManager";
import Login from "./login/Login";

export default class ApplicationViews extends Component {
  state = {
    ballers: [],
    courts: [],
    games: [],
    gamesJoined: []
  };

  deleteGames = id =>
    GamesManager.removeAndList(id).then(games =>
      this.setState({
        games: games
      })
    );
  deleteJoinedGames = id =>
    JoinedGamesManager.removeAndList(id).then(joinedGames =>
      this.setState({
        joinedGames: joinedGames
      })
    );
  addGames = games =>
    GamesManager.addAndList(games).then(games =>
      this.setState({
        games: games
      })
    );
  addJoinedGames = joinedGames =>
    GamesManager.addAndList(joinedGames).then(joinedGames =>
      this.setState({
        joinedGames: joinedGames
      })
    );
  addBallers = ballers =>
    BallersManager.addAndList(ballers).then(ballers =>
      this.setState({
        ballers: ballers
      })
    );
  addCourts = courts =>
    CourtsManager.addAndList(courts).then(court =>
      this.setState({
        courts: courts
      })
    );

  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  componentDidMount() {
    const _state = {};
    // GamesManager.listWithCaretaker()
    GamesManager.all()
      .then(games => (_state.games = games))
      .then(JoinedGamesManager.all())
      .then(joinedGames => (_state.joinedGames = joinedGames))
      .then(() => BallersManager.all())
      .then(ballers => (_state.ballers = ballers))
      .then(() => CourtsManager.all())
      .then(courts => (_state.courts = courts))
      .then(() => {
        this.setState(_state);
      });
  }
  render() {
    console.log(this.state.courts);
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return <CourtsList courts={this.state.courts} {...props} />;
            } else {
              return <Login {...props} />;
            }
          }}
        />
        {/* {
          <Route
            exact
            path="/"
            render={props => {
              return <CourtsList courts={this.state.courts} />;
            }}
          />
        } */}
        {/* <Route
          path="/courts/:courtId(\d+)"
          render={props => {
            return (
              <CourtDetail
                {...props}
                deleteCourts={this.deleteCourts}
                courts={this.state.court}
              />
            );
          }}
        /> */}
        {/* <Route
          exact
          path="/courts"
          render={props => {
            return <CourtsList courts={this.state.courts} />;
          }}
        /> */}
        <Route
          path="/courts/new"
          render={props => {
            return (
              <CourtForm
                {...props}
                addCourt={this.addCourt}
                ballers={this.state.ballers}
              />
            );
          }}
        />

        <Route
          exact
          path="/games"
          render={props => {
            return (
              <GamesList
                {...props}
                deleteGame={this.deleteGame}
                games={this.state.games}
              />
            );
          }}
        />
        {/* <Route
          path="/games/:gameId(\d+)"
          render={props => {
            return (
              <GameDetail
                {...props}
                deleteGame={this.deleteGame}
                games={this.state.games}
              />
            );
          }}
        /> */}
        <Route
          path="/games/new"
          render={props => {
            return (
              <GameForm
                {...props}
                addGame={this.addGame}
                ballers={this.state.ballers}
              />
            );
          }}
        />

        <Route
          exact
          path="/gamesJoined"
          render={props => {
            return (
              <GamesJoinedList
                {...props}
                deleteGameJoined={this.deleteGameJoined}
                gamesJoined={this.state.gamesJoined}
              />
            );
          }}
        />
        <Route
          path="/gamesJoined/:gameJoinedId(\d+)"
          render={props => {
            return (
              <GameJoinedDetail
                {...props}
                deleteGameJoined={this.deleteGameJoined}
                gamesJoined={this.state.gamesJoined}
              />
            );
          }}
        />
        <Route
          path="/gamesJoined/join"
          render={props => {
            return (
              <GamesList
                {...props}
                joinGame={this.joinGame}
                ballers={this.state.ballers}
              />
            );
          }}
        />

        <Route
          exact
          path="/ballers"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <BallersList
                  deleteBaller={this.deleteBaller}
                  games={this.state.games}
                  gamesJoined={this.state.gamesJoined}
                  courts={this.state.courts}
                />
              );
            } else {
              return <Redirect to="/Login" />;
            }
          }}
        />

        <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}
