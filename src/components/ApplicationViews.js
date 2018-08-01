import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class ApplicationViews extends Component {
  state = {
    ballers: [],
    courts: [],
    games: [],
    gamesJoined: []
  };

  deleteGames = id =>
    GamesManager.removeAndList(id).then(animals =>
      this.setState({
        animals: animals
      })
    );
  deleteJoinedGames = id =>
    JoinedGamesManager.removeAndList(id).then(joinedGames =>
      this.setState({
        joinedGames: joinedGames
      })
    );
  addGames = games =>
    GamesManager.addAndList(game).then(games =>
      this.setState({
        games: games
      })
    );
  addJoinedGames = joinedGames =>
    GamesManager.addAndList(joinedGame).then(joinedGames =>
      this.setState({
        joinedGames: joinedGames
      })
    );
  addBallers = ballers =>
    BallersManager.addAndList(baller).then(ballers =>
      this.setState({
        ballers: ballers
      })
    );
  addCourts = courts =>
    CourtsManager.addAndList(court).then(courts =>
      this.setState({
        courts: courts
      })
    );

  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  componentDidMount() {
    const _state = {};
    GameManager.listWithCaretaker()
      .then(games => (_state.games = games))
      .then(() => BallersManager.all())
      .then(ballers => (_state.ballers = ballers))
      .then(() => CourtsManager.all())
      .then(courts => (_state.courts = courts))
      .then(() => {
        this.setState(_state);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <CourtsList locations={this.state.courts} />;
          }}
        />
        <Route
          exact
          path="/courts"
          render={props => {
            return <CourtsList courts={this.state.courts} />;
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
        <Route
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
        />
        <Route
          path="/games/new"
          render={props => {
            return (
              <GameForm
                {...props}
                addGame={this.addGame}
                ballers={this.state.employees}
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
                gamesJoined={this.state.games}
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
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}