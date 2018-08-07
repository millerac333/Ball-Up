import React, { Component } from "react";
import GamesManager from "../../modules/CourtsManager";
import { Field, Control, Button, Input, Label, Select } from "bloomer";

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
  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  addGame = e => {
    e.preventDefault();
    const game = {
      creatorBallerId: this.state.creatorBallerId,
      joinedBallerId: this.state.joinedBallerId,
      locationId: this.state.locationId,
      duration: this.state.duration,
      courtSize: this.state.courtSize,
      id: this.state.gameId
    };
    GamesManager.add(game).then(() => {
      this.props.history.push("/games");
    });
  };

  render() {
    return (
      <React.Fragment>
        <Field>
          <Label>Choose Court Location:</Label>
          <Control>
            <Input
              type="text"
              placeholder="Court Location"
              required="true"
              className="game-location"
              onChange={this.handleFieldChange}
              id="gamelocation"
            />
          </Control>
        </Field>
        <Field>
          <Label>Select:</Label>
          <Control>
            <Select>
              <option href="#">0</option>
              <option href="#">9</option>
              <option href="#">8</option>
              <option href="#">7</option>
              <option href="#">6</option>
              <option href="#">5</option>
              <option href="#">4</option>
              <option href="#">3</option>
              <option href="#">2</option>
              <option href="#">1</option>
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
              placeholder="EX:12PM-2PM"
            />
          </Control>
        </Field>
        <Field>
          <Label>Select:</Label>
          <Control>
            <Select>
              <option href="#" isActive>
                Full-court
              </option>
              <option href="game-size">Half-court</option>
            </Select>
          </Control>
        </Field>
        <Field isGrouped>
          <Control>
            <Button
              isColor="primary"
              type="submit"
              onClick={this.addGame}
              Submit
            />
          </Control>
          <Control>
            <Button isLink={this.props.history.push("/games/")}>Cancel</Button>
          </Control>
        </Field>
      </React.Fragment>
    );
  }
}
