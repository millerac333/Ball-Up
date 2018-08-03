import React, { Component } from "react";
import TimeManager from "../../modules/TimeManager";

export default class CourtsList extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Hello, World</div>
        <div>
          <TimeManager />
        </div>
      </React.Fragment>

      /* <section className="courts">
          {this.props.courts.map(courts => (
            <div key={courts.id} className="card">
              <div className="card-body">
                <h4 className="card-courts courtName">{courts.name}</h4>
                <h4 className="card-courts courtAddress">{courts.address}</h4>
                <h4 className="card-courts courtHours">{courts.hours}</h4>
                <h4 className="card-courts courtType">{courts.courtType}</h4>
                //{" "}
                {/* <button
          type="button"
          className="card-courts court!id"
          onClick={<GameForm />}
        >
          Add New Game {courts.id}
        </button> */
      /* </div>
            </div>
          // ))}
        </section>
      </React.Fragment> */
    );
  }
}
