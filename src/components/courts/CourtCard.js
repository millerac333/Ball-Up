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
  Subtitle,
  Content
} from "bloomer";

export default class CourtCard extends Component {
  state = {
    courts: this.props.court
  };
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardHeaderTitle />
          </CardHeader>
          <CardImage />
          <CardContent>
            <Media>
              <MediaContent>
                <Title />
                <Subtitle />
              </MediaContent>
            </Media>
            <Content />
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
