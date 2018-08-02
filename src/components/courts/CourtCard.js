import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CourtCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div key={this.props.courts.id} className="courts-card">
          <div className="courts-card-body">
            <h5 className="courts-card-name">
              {this.props.courts.name}
              <Link className="nav-link" to={`/courts/${this.props.courts.id}`}>
                Details
              </Link>
              {/* <a href="#"
                                onClick={() => this.props.addGame(this.props.courts.id)}
                                className="card-link">Add Game</a> */}
            </h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
