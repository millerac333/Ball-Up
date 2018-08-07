import React, { Component } from "react";

export default class GameCard extends Component {
  state = {
    games: this.props.game
  };
  render() {
    return (
      <React.Fragment>
        <div key={this.props.game.id} className="games-card">
          <div className="games-card-body">
            <h5 className="games-card-courtLocation">
              {this.props.game.locationId}
              <label htmlFor="games-card-duration">Duration of Game</label>
              <div className="games-card-duraton">
                {this.props.game.duration}
                <label htmlFor="games-card-courtSize">Court Size</label>
                <div className="games-card-courtSize">
                  {this.props.game.courtSize}
                  <label htmlFor="games-card-createdBallerId">
                    Game Created By
                  </label>
                  <div className="games-card-createdBallerId">
                    {this.props.game.joinedBallerId}
                    <label htmlFor="games-card-joinedBallerId">
                      Game Joined By
                    </label>
                    <div className="games-card-joinedBallerId">
                      {this.props.game.joinedBallerId}
                    </div>
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

// import React from "react";
// import { Componet } from "react-router-dom";
// import {
//   Modal,
//   ModalBackground,
//   ModalCard,
//   ModalCardHeader,
//   ModalCardTitle,
//   Delete,
//   ModalCardBody,
//   ModalCardFooter,
//   Button
// } from "bloomer";

// const GameModal = () => {
//   <React.Fragment>
//     <Modal isActive>
//       <ModalBackground />
//       <ModalCard>
//         <ModalCardHeader>
//           <ModalCardTitle>ModalCard Title</ModalCardTitle>
//           <Delete />
//         </ModalCardHeader>
//         <ModalCardBody>{/* Your Content  */}</ModalCardBody>
//         <ModalCardFooter>
//           <Button isColor="success">Save</Button>
//           <Button isColor="warning">Cancel</Button>
//         </ModalCardFooter>
//       </ModalCard>
//     </Modal>
//   </React.Fragment>;
// };

// export default Games;
