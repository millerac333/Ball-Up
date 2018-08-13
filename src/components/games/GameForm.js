import React, { Component } from "react";
import GamesManager from "../../modules/GamesManager";

export default class GameForm extends Component {
  state = {
    // games: this.props.games,
    creatorUserId: "",
    joinedUserId: "",
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
      creatorUserId: this.state.creatorUserId,
      joineduserId: this.state.joinedUserId,
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
              required="true"
              className="game-location"
              onChange={this.handleFieldChange}
              id="locationId"
            />
          </div>
          <div>
            <label>Select:</label>
            <select
              type="option"
              required="true"
              className="game-joinedUsers"
              onChange={this.handleFieldChange}
              id="joinedBallerId"
              value={this.state.joinedUserId}
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
              required="true"
              className="game-duration"
              onChange={this.handleFieldChange}
              id="duration"
              value={this.state.duration}
            />
          </div>
          <div>
            <label>Select:</label>
            <select
              type="option"
              value={this.state.courtSize}
              required="true"
              className="game-courtSize"
              onChange={this.handleFieldChange}
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
