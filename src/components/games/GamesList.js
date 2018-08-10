import React, { Component } from "react";
import GameCard from "./GameCard";
import GamesManager from "../../modules/GamesManager";
import { Link } from "react-router-dom";

export default class GamesList extends Component {
  state = {
    games: [],
    creatorBallerId: "",
    joinedBallerId: "",
    locationId: "",
    duration: "",
    courtSize: "",
    id: ""
  };

  // passGamesList() {
  //   GamesManager.all(this.props.games).then(() => {
  //     this.props.history.push("/games");
  //   });
  // }
  componentDidMount() {
    // GamesManager.listWithCaretaker()
    GamesManager.all().then(games => {
      this.setState({ games });
    });
    // .then(studentExercises => {this.setState({ studentExercises })})
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
            <GameCard key={game.id} games={game} {...this.props} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
