import React, { Component } from "react";
import CourtCard from "./CourtCard";
import CourtsManager from "../../modules/CourtsManager";
import { Link } from "react-router-dom";

export default class CourtsList extends Component {
  state = {
    courts: this.props.courts,
    name: "",
    address: "",
    hours: "",
    type: "",
    id: ""
  };

  passCourtsList() {
    CourtsManager.all(this.props.courts).then(() => {
      this.props.history.push("/courts");
    });
  }

  render() {
    console.log(this.state.courts);
    return (
      <React.Fragment>
        <Link
          className="add-court"
          to={{
            pathname: "/courts/new"
          }}
        >
          Add Court
        </Link>
        <section className="courts">
          {this.props.courts.map(court => (
            <CourtCard key={court.id} court={court} {...this.props} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
