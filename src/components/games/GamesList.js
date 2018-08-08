import React, { Component } from "react";
import GameCard from "./GameCard";
import GamesManager from "../../modules/GamesManager";
import { Link } from "react-router-dom";

export default class GamesList extends Component {
  state = {
    games: this.props.game,
    creatorBallerId: "",
    joinedBallerId: "",
    locationId: "",
    duration: "",
    courtSize: "",
    id: ""
  };

  passGamesList() {
    GamesManager.all(this.props.games).then(() => {
      this.props.history.push("/games");
    });
  }

  render() {
    console.log(this.state.games);
    return (
      <React.Fragment>
        <Link
          className="add-game"
          to={{
            path: "/games/new"
          }}
        >
          Add Game
        </Link>
        <section className="games">
          {this.props.games.map(game => (
            <GameCard key={game.id} game={game} {...this.props} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
