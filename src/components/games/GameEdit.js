import React, { Component } from "react";
// import GeneralManager from "../../modules/GeneralManager";
import { Field, Control, Button, Input, Label, Select, Form } from "bloomer";

export default class EditGame extends Component {
  // Set initial state
  //   state = {
  //     games: this.props.location.game,
  //     creatorBallerId: this.props.game.creatorBallerId,
  //     joinedBallerId: this.props.game.joinedBallerId,
  //     locationId: this.props.game.locationId,
  //     duration: this.props.game.duration,
  //     courtSize: this.props.game.courtSize
  //   };
  state = {
    creatorBallerId: this.props.location.state.game.creatorBallerId,
    joinedBallerId: this.props.location.state.game.joinedBallerId,
    courtSize: this.props.location.state.game.courtSize,
    locationId: this.props.location.state.game.locationId,
    duration: this.props.location.state.game.duration,
    id: this.props.location.state.game.id
  };

  // Update state whenever an input field is edited
  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  // handleUpdate = e => {
  //   e.preventDefault();

  //   const updatedGame = {
  //     creatorBallerId: this.state.creatorBallerId,
  //     joinedBallerId: this.state.joinedBallerId,
  //     locationId: this.state.locationId,
  //     duration: this.state.duration,
  //     courtSize: this.state.courtSize
  //   };
  //     GeneralManager.patchData(
  //       "games",
  //       this.props.location.state.game.id,
  //       updatedGame

  render() {
    //     );

    console.log(this.props.game.creatorBallerId);
    return (
      <React.Fragment>
        <Field>
          <Label>Choose Court Location:</Label>
          <Control>
            <Input
              type="text"
              value={this.state.locationId}
              required="true"
              className="game-location"
              onChange={this.handleFieldChange}
              id="locationId"
            />
          </Control>
        </Field>
        <Field>
          <Label>Select:</Label>
          <Control>
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
          </Control>
        </Field>
        <Field>
          <Label>Duration of Game:</Label>
          <Control>
            <Input
              type="EX:12PM-2PM"
              required="true"
              className="game-duration"
              onChange={this.handleFieldChange}
              id="duration"
              value={this.state.duration}
            />
          </Control>
        </Field>
        <Field>
          <Label>Select:</Label>
          <Control>
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
          </Control>
        </Field>
        <Field>
          <Control>
            <Button
              isColor="primary"
              type="submit"
              onClick={this.props.handleUpdate}
            >
              Submit
            </Button>
          </Control>
          <Control />
        </Field>
      </React.Fragment>
    );
  }
}
