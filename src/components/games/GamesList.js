import React, { Component } from "react";
import GameCard from "./GameCard";
import GeneralManager from "../../modules/GeneralManager";
import GamesManager from "../../modules/GamesManager";
import { Link } from "react-router-dom";

export default class GamesList extends Component {
  state = {
    games: [],
    creatorUserId: "",
    joinedUserId: "",
    locationId: "",
    duration: "",
    courtSize: "",
    id: ""
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

  componentDidMount() {
    GamesManager.all().then(games => {
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
