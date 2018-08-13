import React, { Component } from "react";
import GameCard from "./GameCard";
import GeneralManager from "../../modules/GeneralManager";
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
  // handleFieldChange = e => {
  //   const stateToChange = {};
  //   stateToChange[e.target.id] = e.target.value;
  //   this.setState(stateToChange);
  // };

  // handleUpdate = e => {
  //   e.preventDefault();
  //   const updatedGame = {
  //     creatorBallerId: this.state.creatorBallerId,
  //     joinedBallerId: this.state.joinedBallerId,
  //     locationId: this.state.locationId,
  //     duration: this.state.duration,
  //     courtSize: this.state.courtSize
  //   };

  //   GeneralManager.patchData("games", this.games.id, updatedGame).then(() =>
  //     this.props.history.push("/games")
  //   );
  // };

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
    // GamesManager.listWithCaretaker()
    GamesManager.all().then(games => {
      this.setState({ games: games });
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
            <GameCard key={game.id} games={game} deleteGame={this.deleteGame} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
