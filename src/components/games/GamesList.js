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
  // "http://localhost:3333/games?_expand=user"
  componentDidMount() {
    fetch("http://localhost:3333/games?_expand=location")
      .then(e => e.json())
      // .then(
      //   fetch("http://localhost:3333/games?_expand=user")
      //     .then(e => e.json())
      .then(games => {
        this.setState({ games: games });
      });
    // .then(
    //   fetch("http://localhost:3333/games?_expand=user")
    // .then(e => e.json())
    // .then(games => {
    //   this.setState({ games: games });
    // })
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
