import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ApplicationViews from "../ApplicationViews";

export default class GameCard extends Component {
  state = {
    games: this.props.game
  };

  render() {
    console.log(this.props.game);
    return (
      <React.Fragment>
        <div key={this.props.game.id} className="games-card">
          <div className="games-card-body">
            <h5 className="games-card-courtLocation">
              {this.props.game.locationId}
            </h5>
          </div>
          <div className="games-card-duraton">
            <label htmlFor="games-card-duration">Duration of Game</label>
            {this.props.game.duration}
            <label htmlFor="games-card-courtSize">Court Size</label>
          </div>
          <div className="games-card-courtSize">
            {this.props.game.courtSize}
          </div>
          <div className="games-card-createdBallerId">
            <label htmlFor="games-card-createdBallerId">Game Created By</label>
          </div>
          <div className="games-card-createdBallerId">
            <label htmlFor="games-card-joinedBallerId">Game Joined By</label>
            {this.props.game.joinedBallerId}
          </div>
          <div>
            <Link
              className="games-card-link"
              to={{
                pathname: "/games/edit",
                state: { game: this.props.game }
              }}
            >
              Edit
            </Link>
            {/* <button
              type="edit"
              onClick={() => this.props.editGame(this.props.game.id)}
              className="btn btn-primary"
            >
              Edit
            </button> */}
          </div>
          <div>
            <button
              type="delete"
              onClick={() => this.props.deleteGame(this.props.game.id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
