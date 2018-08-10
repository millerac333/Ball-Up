import React, { Component } from "react";
import GamesManager from "../../modules/GamesManager";
// import { Field, Control, Button, Input, Label, Select } from "bloomer";

export default class GameForm extends Component {
  state = {
    // games: this.props.games,
    creatorBallerId: "",
    joinedBallerId: "",
    locationId: "",
    duration: "",
    courtSize: "",
    id: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  addGame = e => {
    e.preventDefault();
    const game = {
      creatorBallerId: this.state.creatorBallerId,
      joinedBallerId: this.state.joinedBallerId,
      locationId: this.state.locationId,
      duration: this.state.duration,
      courtSize: this.state.courtSize
    };
    GamesManager.add(game).then(() => {
      this.props.history.push("/games");
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.state.handleUpdate}>
          <div>
            <label>Choose Court Location:</label>
            <input
              type="text"
              value={this.state.locationId}
              // required="true"
              className="game-location"
              onChange={this.handleFieldChange.bind(this)}
              id="locationId"
            />
          </div>
          <div>
            <label>Select:</label>
            <select
              type="option"
              // required="true"
              className="game-location"
              onChange={this.handleFieldChange.bind(this)}
              id="joinedBallerId"
              value={this.state.joinedBallerId}
            >
              <option>0</option>
              <option>9</option>
              <option>8</option>
              <option>7</option>
              <option>6</option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </div>
          <div>
            <label>Duration of Game:</label>
            <input
              type="EX:12PM-2PM"
              // required="true"
              className="game-duration"
              onChange={this.handleFieldChange.bind(this)}
              id="duration"
              value={this.state.duration}
            />
          </div>
          <div>
            <label>Select:</label>
            <select
              type="option"
              value={this.state.courtSize}
              // required="true"
              className="game-courtSize"
              onChange={this.handleFieldChange.bind(this)}
              id="courtSize"
            >
              <option>Full-court</option>
              <option>Half-court</option>
            </select>
          </div>
          <div>
            <button type="submit" onClick={this.addGame}>
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
