import React, { Component } from "react";

export default class CourtCard extends Component {
  state = {
    locations: this.props.location
  };
  render() {
    return (
      <React.Fragment>
        <div key={this.props.location.id} className="courts-card">
          <div className="courts-card-body">
            <h5 className="courts-card-name">
              {this.props.location.nameCourt}
              <label htmlFor="courts-card-address">Address</label>
              <div className="courts-card-address">
                {this.props.location.address}
                <label htmlFor="courts-card-hours">Hours of Operation</label>
                <div className="courts-card-hours">
                  {this.props.location.hours}
                  <label htmlFor="courts-card-courtType">Court Type</label>
                  <div className="courts-card-courtType">
                    {this.props.location.typeCourt}
                    {/* <a href="#"
                                onClick={() => this.props.addGame(this.props.courts.id)}
                             className="card-link">Add Game</a> */}
                  </div>
                </div>
              </div>
            </h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
