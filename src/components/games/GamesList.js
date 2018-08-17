import React, { Component } from "react";
import GameCard from "./GameCard";
import GeneralManager from "../../modules/GeneralManager";
// import GamesManager from "../../modules/GamesManager";
import { Link } from "react-router-dom";

export default class GamesList extends Component {
  state = {
    games: [],
    userId: "",
    joinedUserId: "",
    locationId: "",
    duration: "",
    courtSize: "",
    locations: this.props.locations,
    users: this.props.users
  };

  deleteGame = gameID => {
    GeneralManager.deleteData("games", gameID)
      .then(() => {
        return GeneralManager.getAllData("games");
      })
      .then(gamesList => {
        this.setState({
          games: gamesList
        });
      });
  };
  // componentWillMount() {
  //   let userGames = sessionStorage.getItem("currentUser");
  //   this.setState({ userId: userGames });
  //   console.log("new user id state", userGames);
  // }
  componentDidMount() {
    fetch("http://localhost:3333/games?_expand=location&_expand=user")
      .then(e => e.json())
      .then(games => {
        console.log("before split", games);
        // let userGames = sessionStorage.getItem("currentUser");
        let createdGames = games.filter(game => game.userId === game.user.id);
        let otherGames = games.filter(game => game.userId !== game.user.id);
        // console.log("new user id state", userGames);
        console.log("created games", createdGames);
        console.log("other games", otherGames);
        this.setState({ games: games });
      });
  }

  render() {
    console.log(this.state.games);
    return (
      <React.Fragment>
        <Link
          className="add-game"
          to={{
            pathname: "/games/new"
          }}
        >
          Add Game
        </Link>
        <section className="games">
          {this.state.games.map(game => (
            <GameCard key={game.id} games={game} deleteGame={this.deleteGame} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
