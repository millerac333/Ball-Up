import React, { Component } from "react";
import CourtsManager from "../../modules/CourtsManager";
import { Field, Control, Button, Input, Label, Select } from "bloomer";

export default class CourtForm extends Component {
  // Set initial state
  state = {
    name: "",
    address: "",
    hours: "",
    courtType: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  addCourt = e => {
    e.preventDefault();
    const courts = {
      name: this.state.courtName,
      address: this.state.address,
      hours: this.state.hours,
      courtType: this.state.courtType
    };
    CourtsManager.add(courts).then(() => {
      this.props.history.push("/courts");
    });
  };

  render() {
    return (
      <React.Fragment>
        <Field>
          <Label> Court's Name:</Label>
          <Control>
            <Input
              type="text"
              placeholder="name"
              required="true"
              className="court-name"
              onChange={this.handleFieldChange}
              id="courtName"
            />
          </Control>
        </Field>
        <Field>
          <Label>Address:</Label>
          <Control>
            <Input
              type="text"
              placeholder="address"
              required="true"
              className="court-address"
              onChange={this.handleFieldChange}
              id="address"
            />
          </Control>
        </Field>
        <Field>
          <Label>Hours of Operation:</Label>
          <Control>
            <Input
              type="text"
              placeholder="EX: 24hr OR 8AM-8PM"
              required="true"
              className="court-hours"
              onChange={this.handleFieldChange}
              id="hours"
            />
          </Control>
        </Field>
        <Field>
          <Label>Select:</Label>
          <Control>
            <Select>
              <option href="courtType">Outdoor</option>
              <option href="courtType">Indoor/Gym</option>
            </Select>
          </Control>
        </Field>
        <Field>
          <Control>
            <Button isColor="primary" type="submit" onClick={this.addCourt}>
              Add Court
            </Button>
          </Control>
          {/* <Control>
            <Button isLink={this.props.history.push("/courts/")}>Cancel</Button>
          </Control> */}
        </Field>
      </React.Fragment>
    );
  }
}
