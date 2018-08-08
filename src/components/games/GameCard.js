import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardImage,
  CardContent,
  Media,
  MediaContent,
  Title,
  Image,
  Subtitle,
  Content
} from "bloomer";

export default class GameCard extends Component {
  state = {
    games: this.props.games
  };
  render() {
    console.log(this.props.games);
    return (
      <React.Fragment>
        <Card>
          <CardHeader key={this.props.game.id} className="game-card">
            <CardHeaderTitle className="game-card-courtLocation">
              {this.props.game.locationId}>
            </CardHeaderTitle>
          </CardHeader>
          <CardImage classname="game-card-image">
            <Image isRatio="1:1" src="https://via.placeholder.com/350x150" />
          </CardImage>
          <CardContent>
            <Media>
              <MediaContent>
                <Title isSize={4}>Game Created By</Title>
                <Subtitle isSize={6}>
                  {this.props.game.createdBallerId}
                </Subtitle>
              </MediaContent>
            </Media>
            <Content>
              Game Time: {this.props.game.duration}
              <br />
              <small>
                Court Size: {this.props.game.courtSize}
                <br />
                Game Joined By: {this.props.game.joinedBallerId}
              </small>
            </Content>
          </CardContent>
          <button
            type="edit"
            onClick={this.editGame}
            className="btn btn-primary"
          >
            Edit
          </button>
          <button
            type="delete"
            onClick={this.deleteGame}
            className="btn btn-primary"
          >
            Delete
          </button>
        </Card>
      </React.Fragment>
    );
  }
}

//          <div key={this.props.game.id} className="games-card">
//            <div className="games-card-body">
//             <h5 className="games-card-courtLocation">
//               {this.props.game.locationId}
//                <label htmlFor="games-card-duration">Duration of Game</label>
//                <div className="games-card-duration">
//                  {this.props.game.duration}
//                  <label htmlFor="games-card-courtSize">Court Size</label>
//                  <div className="games-card-courtSize">
//                    {this.props.game.courtSize}
//                    <label htmlFor="games-card-createdBallerId">
//                     Game Created By
//                   </label>
//                   <div className="games-card-createdBallerId">
//                     {this.props.game.createdBallerId}
//                     <label htmlFor="games-card-joinedBallerId">Game Joined By
//                     </label>
//                     <div className="games-card-joinedBallerId">
//                       {this.props.game.joinedBallerId}
//                       <div>
//                          <button
//                            type="edit"
//                            onClick={this.editGame}
//                            className="btn btn-primary"
//                          >
//                            Edit
//                          </button>
//                        </div>
//                        <div>
//                          <button
//                            type="delete"
//                            onClick={this.deleteGame}
//                            className="btn btn-primary"
//                          >
//                            Delete
//                          </button>
//                        </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </h5>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
