import React, { Component } from "react";
import GameCard from "./GameCard";
import GamesManager from "../../modules/GamesManager";
import GameForm from "./GameForm";

export default class GamesList extends Component {
  state = {
    games: this.props.games,
    creatorBallerId: "",
    joinedBallerId: "",
    locationId: "",
    duration: "",
    courtSize: "",
    gameId: ""
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
        <div>
          <div className="gamesButton">
            <button
              type="button"
              onClick={() => {
                this.props.history.push("/games/new");
              }}
              className="btn btn-success"
            >
              Add Court{<GameForm />}
            </button>
          </div>
          <section className="games">
            {this.props.games.map(game => (
              <GameCard key={game.id} game={game} {...this.props} />
            ))}
          </section>
        </div>
      </React.Fragment>
    );
  }
}
