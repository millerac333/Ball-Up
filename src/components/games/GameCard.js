import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ApplicationViews from "../ApplicationViews";

export default class GameCard extends Component {
  state = {
    games: this.props.games,
    creatorBallerId: this.props.games.creatorBallerId,
    joinedBallerId: this.props.games.joinedBallerId,
    locationId: this.props.games.locationId,
    duration: this.props.games.duration,
    courtSize: this.props.games.courtSize
  };

  render() {
    console.log("PROPS", this.props.games);
    console.log("creatorid", this.props.games.creatorBallerId);
    return (
      <React.Fragment>
        <div className="games-card">
          <div className="games-card-body">
            <h5 className="games-card-courtLocation">
              {this.props.games.locationId}
            </h5>
          </div>
          <div className="games-card-duraton">
            <label htmlFor="games-card-duration">Duration of Game</label>
            {this.props.games.duration}
            <label htmlFor="games-card-courtSize">Court Size</label>
          </div>
          <div className="games-card-courtSize">
            {this.props.games.courtSize}
          </div>
          <div className="games-card-createdBallerId">
            <label htmlFor="games-card-createdBallerId">Game Created By</label>
          </div>
          <div className="games-card-createdBallerId">
            <label htmlFor="games-card-joinedBallerId">Game Joined By</label>
            {this.props.games.joinedBallerId}
          </div>
          <div>
            <Link
              className="games-card-link"
              to={{
                pathname: "/games/edit",
                state: {
                  games: this.props.games
                }
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
              onClick={() => this.props.deleteGame(this.props.games.id)}
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
