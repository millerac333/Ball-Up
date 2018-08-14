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
// import JoinedGamesManager from "../modules/JoinedGamesManager";
import UsersManager from "../modules//UsersManager";
import CourtsManager from "../modules/CourtsManager";
import Login from "./login/Login";
import EditGame from "./games/GameEdit";
// import GeneralManager from "../modules/GeneralManager";
// import settings from "../settings";

// dropdown, booleans, submit on form does not push back

export default class ApplicationViews extends Component {
  state = {
    users: [],
    courts: [],
    gamesJoined: []
  };

  // deleteGame = id =>
  //   GamesManager.removeAndList(id).then(games =>
  //     this.setState({
  //       games: games
  //     })
  //   );
  // deleteJoinedGames = id =>
  //   JoinedGamesManager.removeAndList(id).then(joinedGames =>
  //     this.setState({
  //       joinedGames: joinedGames
  //     })
  //   );
  // addGames = games =>
  //   GamesManager.addAndList(games).then(games =>
  //     this.setState({
  //       games: games
  //     })
  //   );
  // addJoinedGames = joinedGames =>
  //   GamesManager.addAndList(joinedGames).then(joinedGames =>
  //     this.setState({
  //       joinedGames: joinedGames
  //     })
  //   );
  // addUsers = users =>
  //   UsersManager.addAndList(users).then(users =>
  //     this.setState({
  //       users: users
  //     })
  //   );
  // addCourts = courts =>
  //   CourtsManager.addAndList(courts).then(courts =>
  //     this.setState({
  //       courts: courts
  //     })
  //   );
  // editGame = id =>
  //   GamesManager.updateAndList(id).then(games =>
  //     this.setState({
  //       games: games
  //     })
  //   );
  // handleFieldChange = e => {
  //   const stateToChange = {};
  //   stateToChange[e.target.id] = e.target.value;
  //   this.setState(stateToChange);
  // };

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  componentDidMount() {
    const _state = {};
    // GamesManager.listWithCaretaker()
    GamesManager.all()
      .then(joinedGames => (_state.joinedGames = joinedGames))
      .then(() => UsersManager.all())
      .then(users => (_state.users = users))
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
                // users={this.state.users}
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
                // games={this.state.games}
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
            return <GameForm {...props} addGame={this.addGame} />;
          }}
        />
        <Route
          path="/games/edit"
          render={props => {
            return <EditGame {...props} games={props.location.state.games} />;
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
        users={this.state.users}
       />
      );
     }}
    /> */}
        {/* <Route
     exact
     path="/users"
     render={props => {
      if (this.isAuthenticated()) {
       return (
        <UsersList
         deleteUser={this.deleteUser}
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
      </React.Fragment>
    );
  }
}
