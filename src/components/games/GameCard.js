import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GameCard extends Component {
  state = {
    games: this.props.games,
    creatorUserId: this.props.games.creatorUserId,
    joinedUserId: this.props.games.joinedUserId,
    locationId: this.props.games.locationId,
    duration: this.props.games.duration,
    courtSize: this.props.games.courtSize
  };

  render() {
    console.log("PROPS", this.props.games);
    console.log("creatorId", this.props.games.creatorUserId);
    return (
      <React.Fragment>
        <div className="games-card">
          <div className="games-card-body">
            <div className="games-card-courtLocation">
              {this.props.games.location.nameCourt}
              {/* {this.props.games
                .filter(game => game.locationId === locations.id)
                .map(location => (
                  <h5 key={location.id} value={location.nameCourt}>
                    {location.nameCourt}
                  </h5>
                ))} */}
            </div>
            <div className="games-card-duraton">
              <label htmlFor="games-card-duration">Duration of Game</label>
              {this.props.games.duration}
              <label htmlFor="games-card-courtSize">Court Size</label>
            </div>
            <div className="games-card-courtSize">
              {this.props.games.courtSize}
            </div>
            <div className="games-card-createdUserId">
              <label htmlFor="games-card-createdUserId">Game Created By</label>
              {this.props.games.creatorUserId}
            </div>
            <div className="games-card-createdBUserId">
              <label htmlFor="games-card-joinedUSerId">Game Joined By</label>
              {this.props.games.joinedUserId}
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
        </div>
      </React.Fragment>
    );
  }
}
