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
  Content
} from "bloomer";

export default class CourtCard extends Component {
  state = {
    courts: this.props.court
  };
  render() {
    return (
      <React.Fragment>
        <Card key={this.props.court.id} className="courts-card">
          <CardHeader>
            <CardHeaderTitle className="courts-card-body">
              {this.props.court.name}
            </CardHeaderTitle>
          </CardHeader>
          <CardImage classname="courts-card-image">
            <Image isRatio="4:3" src="https://via.placeholder.com/1280x960" />
          </CardImage>
          <CardContent>
            <Media>
              <MediaContent>
                <Title className="courts-card-address">
                  {this.props.court.address}
                </Title>
              </MediaContent>
            </Media>
            <Content>
              Hours of Operation: {this.props.court.hours}
              <br />
              <small>Court Type: {this.props.court.type}</small>
            </Content>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

//         <div key={this.props.court.id} className="courts-card">
//           <div className="courts-card-body">
//             <h5 className="courts-card-name">
//               {this.props.court.name}
//               <label htmlFor="courts-card-address">Address</label>
//               <div className="courts-card-address">
//                 {this.props.court.address}
//                 <label htmlFor="courts-card-hours">Hours of Operation</label>
//                 <div className="courts-card-hours">
//                   {this.props.court.hours}
//                   <label htmlFor="courts-card-courtType">Court Type</label>
//                   <div className="courts-card-courtType">
//                     {this.props.court.type}
//                     <a href="#"
//                                 onClick={() => this.props.addGame(this.props.courts.id)}
//                              className="card-link">Add Game</a>
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
