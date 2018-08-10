import React, { Component } from "react";
import { Route } from "react-router-dom";
import CourtsList from "./courts/CourtsList";
import CourtForm from "./courts/CourtForm";
import GamesList from "./games/GamesList";
import GameForm from "./games/GameForm";
// import GameCard from "./games/GameCard";
// import GamesJoinedList from "./games-joined/GamesJoinedList";
// import GameJoinedDetail from "./games-joined/GameJoinedDetail";
import GamesManager from "../modules/GamesManager";
import JoinedGamesManager from "../modules/JoinedGamesManager";
import BallersManager from "../modules/BallersManager";
import CourtsManager from "../modules/CourtsManager";
import Login from "./login/Login";
import EditGame from "./games/GameEdit";
import GeneralManager from "../modules/GeneralManager";
import settings from "../settings";

// dropdown, booleans, submit on form does not push back

export default class ApplicationViews extends Component {
  state = {
    ballers: [],
    courts: [],
    games: [],
    gamesJoined: []
  };

  deleteGame = id =>
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
    CourtsManager.addAndList(courts).then(courts =>
      this.setState({
        courts: courts
      })
    );
  editGame = id =>
    GamesManager.updateAndList(id).then(games =>
      this.setState({
        games: games
      })
    );
  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  handleUpdate = e => {
    e.preventDefault();

    const updatedGame = {
      creatorBallerId: this.state.creatorBallerId,
      joinedBallerId: this.state.joinedBallerId,
      locationId: this.state.locationId,
      duration: this.state.duration,
      courtSize: this.state.courtSize
    };
    console.log(updatedGame);

    return fetch(`${settings.remoteURL}/${this.props.location.state.game.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedGame)
    }).then(e => e.json());

    // getAllData: {
    // value: resource => {
    //   return fetch(`${settings.remoteURL}/${resource}`).then(e => e.json());

    // })
  };

  // patchData: {
  //   value: function(resource, resourceObject) {
  //     return fetch(`${settings.remoteURL}/${resource}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(resourceObject)
  //     }).then(e => e.json());
  //   }
  // }
  // ).then(
  //     getAllData: {
  //       value: resource => {
  //         return fetch(`${settings.remoteURL}/${resource}`).then(e => e.json());
  //       }
  //     })
  //   }
  // }

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
    console.log(this.state.games);
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
        {
          <Route
            exact
            path="/courts"
            render={props => {
              return <CourtsList courts={this.state.courts} />;
            }}
          />
        }
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
              <EditGame
                {...props}
                hanldleUpdate={this.hanldleUpdate}
                games={this.state.games}
              />
            );
          }} */}

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
          path="/games/edit"
          render={props => {
            return (
              <EditGame
                {...props}
                handleUpdate={this.handleUpdate}
                game={this.state.games}
              />
            );
          }}
        />
        {/* <Route
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
        /> */}

        {/* <Route
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
        /> */}

        <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}
