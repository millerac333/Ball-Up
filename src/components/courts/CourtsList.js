import React, { Component } from "react";
import CourtCard from "./CourtCard";
import CourtsManager from "../../modules/CourtsManager";
import { Link } from "react-router-dom";
// import CourtForm from "./CourtForm";

export default class CourtsList extends Component {
  state = {
    courts: this.props.courts,
    name: "",
    address: "",
    hours: "",
    type: "",
    id: ""
  };

  passCourtsList() {
    CourtsManager.all(this.props.courts).then(() => {
      this.props.history.push("/courts");
    });
  }

  render() {
    console.log(this.state.courts);
    return (
      <React.Fragment>
        <Link
          className="add-court"
          to={{
            pathname: "/courts/new"
          }}
        >
          Add Court
        </Link>
        <section className="courts">
          {this.props.courts.map(court => (
            <CourtCard key={court.id} court={court} {...this.props} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

// import TimeManager from "../../modules/TimeManager";

// export default class CourtsList extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         {/* <div>Hello, World</div> */}
//         <section className="courts">
//           {this.props.courts.map(courts => (
//             <div key={courts.id} className="card">
//               <div className="card-body">
//                 <h4 className="card-courts courtName">{courts.name}</h4>
//                 <h4 className="card-courts courtAddress">{courts.address}</h4>
//                 <h4 className="card-courts courtHours">{courts.hours}</h4>
//                 <h4 className="card-courts courtType">
//                   {courts.courtType}
//                 </h4>{" "}
//                 {
//                   // <button
//                   //   type="button"
//                   //   className="card-courts court!id"
//                   //   onClick={<GameForm />}
//                   // >
//                   //   Add New Game {courts.id}
//                   // </button>
//                 }
//               </div>
//             </div>
//           ))}
//         </section>
//       </React.Fragment>
//     );
//   }
// }
