import React, { Component } from "react";
import GamesManager from "../../modules/CourtsManager";

export default class GameForm extends Component {
  state = {
    games: this.props.games,
    creatorBallerId: "",
    joinedBallerId: "",
    locationId: "",
    duration: "",
    courtSize: "",
    gameId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  addNewGame = e => {
    e.preventDefault();
    const game = {
      creatorBallerId: this.state.creatorBallerId,
      joinedBallerId: this.state.joinedBallerId,
      locationId: this.state.locationId,
      duration: this.state.duration,
      courtSize: this.state.courtSize,
      gameId: this.state.gameId
    };
    GamesManager.add(game).then(() => {
      this.props.history.push("/games");
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="gamesForm">
          <div className="games-form-group">
            <label htmlFor="locationId">Choose Court Location:</label>
            <input
              type="gamelocation"
              required="true"
              className="games-form-control"
              onChange={this.handleFieldChange}
              id="gamelocation"
              placeholder="Court Location"
            />
          </div>
          <div className="games-form-group">
            <label htmlFor="">Number of Players:</label>
            <input
              type="number"
              required="true"
              className="courts-form-control"
              onChange={this.handleFieldChange}
              id="numberOfPlayers"
              placeholder="Number of Players"
            />
          </div>
          <div className="games-form-group">
            <label htmlFor="hours">Duration of Game:</label>
            <input
              type="duration"
              required="true"
              className="games-form-control"
              onChange={this.handleFieldChange}
              id="duration"
              placeholder="Duration of Game"
            />
          </div>
          <div className="courts-form-group">
            <label htmlFor="courtType">Court Size::</label>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select<span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="">Full-court</a>
                </li>
                <li>
                  <a href="">Half-court</a>
                </li>
              </ul>
            </div>
          </div>
          <button
            type="submit"
            onClick={this.addNewGame}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
