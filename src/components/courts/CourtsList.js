import React, { Component } from "react";

export default class CourtsList extends Component {
  render() {
    return (
      <section className="courts">
        {this.props.courts.map(courts => (
          <div key={courts.id} className="card">
            <div className="card-body">
              <h4 className="card-courts courtName">{courts.name}</h4>
              <h4 className="card-courts courtAddress">{courts.address}</h4>
              <h4 className="card-courts courtHours">{courts.hours}</h4>
              <h4 className="card-courts courtSize">{courts.size}</h4>
              {/* <button
                type="button"
                className="card-courts court!id"
                onClick={<GameForm />}
              >
                Add New Game {courts.id}
              </button> */}
            </div>
          </div>
        ))}
      </section>
    );
  }
}
