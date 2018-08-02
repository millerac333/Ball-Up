import React, { Component } from "react";

export default class CourtsDetail extends Component {
  render() {
    const courts =
      this.props.courts.find(
        a => a.id === parseInt(this.props.match.params.courtsId)
      ) || {};
    return (
      <section className="courts">
        <div key={courts.id} className="courts-card">
          <div className="courts-card-body">
            <h3 className="courts-card-name">{courts.name}</h3>
            <label htmlFor="courts-card-address">Address</label>
            <div className="courts-card-address">{courts.address}</div>
            <label htmlFor="courts-card-hours">Hours of Operation</label>
            <div className="courts-card-hours">{courts.hours}</div>
            <label htmlFor="courts-card-type">Court Type</label>
            <div className="courts-card-type">{courts.type}</div>
            {/* <button
              type="button"
              className="courts-card-button"
              onClick={<GameForm />}
            >
              Add New Game {courts.id}
            </button> */}
          </div>
        </div>
      </section>
    );
  }
}
