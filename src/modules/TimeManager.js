import "rc-time-picker/assets/index.css";
import React from "react";
// import ReactDom from "react-dom";
import moment from "moment";
import TimePicker from "rc-time-picker/lib";

export default Object.create(null, {
  state = {
    value: moment(),
    open: false,
    clicked: ""
  },
  handleValueChange = value => {
    console.log(value && value.format("HH:mm:ss"));
    this.setState({ value });
  },
  clear = () => {
    this.setState({
      value: undefined
    });
  },
  setOpen = ({ open }) => {
    this.setState({ open });
  },
  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  },
  TimePickerLauncher = () => {
    if (this.state.clicked === "") {
      this.setState({
        clicked: (
      <form>
        {<TimePicker
          id={"startTime"}
          className={"start-time"}
          name={"open-time"}
          use12Hours={true}
          disabledSeconds={true}
          defaultValue={this.state.value}
          onChange={this.handleValueChange}
          open={this.state.open}
          onOpen={this.setOpen}
          onClose={this.setOpen}
          focusOnOpen
        />}
        {<TimePicker
          name={"close-time"}
          id={"endTime"}
          className={"end-time"}
          use12Hours={true}
          disabledSeconds={true}
          value={this.state.value}
          onChange={this.handleValueChange}
          open={this.state.open}
          onOpen={this.setOpen}
          onClose={this.setOpen}
          focusOnOpen
        />}
        <button onClick={this.clear}>clear</button>
      </form>
    )
  });
} else {
  this.setState({ clicked: "" });
}
  

// ReactDom.render(<TimePickerX2 />, document.getElementById("__react-content"));
