import React, { Component } from "react";
import GamesManager from "../../modules/GamesManager";
import { Field, Button, Input, Label, Select } from "bloomer";

export default class EditGame extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { value: "" };

  //     this.handleFieldChange = handleFieldChange.bind(this);
  //     this.handleUpdate = this.handleUpdate.bind(this);
  //   }
  // Set initial state
  state = {
    games: this.props.location.game
    //     creatorBallerId: this.props.game.creatorBallerId,
    //     joinedBallerId: this.props.game.joinedBallerId,
    //     locationId: this.props.game.locationId,
    //     duration: this.props.game.duration,
    //     courtSize: this.props.game.courtSize
  };
  //   state = {
  //     creatorBallerId: this.props.location.state.game.creatorBallerId,
  //     joinedBallerId: this.props.location.state.game.joinedBallerId,
  //     courtSize: this.props.location.state.game.courtSize,
  //     locationId: this.props.location.state.game.locationId,
  //     duration: this.props.location.state.game.duration,
  //     id: this.props.location.state.game.id
  //   };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleUpdate = e => {
    e.preventDefault();
    const updatedGame = {
      creatorBallerId: this.state.creatorBallerId,
      joinedBallerId: this.state.joinedBallerId,
      locationId: this.state.locationId,
      duration: this.state.duration,
      courtSize: this.state.courtSize
    };
    GamesManager.updateAndList("games", this.games.id, updatedGame);
  };

  render() {
    return (
      <React.Fragment>
        <Field isGrouped onSubmit={this.state.handleUpdate}>
          <Label>Choose Court Location:</Label>
          <Input
            type="text"
            value={this.state.locationId}
            required="true"
            className="game-location"
            onChange={this.handleFieldChange}
            id="locationId"
          />
        </Field>
        <Field>
          <Label>Select:</Label>
          <Select
            type="option"
            required="true"
            className="game-location"
            onChange={this.handleFieldChange}
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
          </Select>
        </Field>
        <Field>
          <Label>Duration of Game:</Label>
          <Input
            type="EX:12PM-2PM"
            required="true"
            className="game-duration"
            onChange={this.handleFieldChange}
            id="duration"
            value={this.state.duration}
          />
        </Field>
        <Field>
          <Label>Select:</Label>
          <Select
            type="option"
            value={this.state.courtSize}
            required="true"
            className="game-courtSize"
            onChange={this.handleFieldChange}
            id="courtSize"
          >
            <option>Full-court</option>
            <option>Half-court</option>
          </Select>
        </Field>
        <Field>
          <Button isColor="primary" type="submit">
            Submit
          </Button>
        </Field>
      </React.Fragment>
    );
  }
}
