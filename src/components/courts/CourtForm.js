// import React, { Component } from "react";

// export default class CourtForm extends Component {
//   // Set initial state
//   state = {
//     name: "",
//     address: "",
//     hours: "",
//     courtType: ""
//   };

//   // Update state whenever an input field is edited
//   handleFieldChange = e => {
//     const stateToChange = {};
//     stateToChange[e.target.id] = e.target.value;
//     this.setState(stateToChange);
//   };

//   addNewCourt = e => {
//     e.preventDefault();
//     const courts = {
//       name: this.state.courtlName,
//       address: this.state.address,
//       hours: this.state.hours,
//       courtType: this.state.courtType
//     };
//     this.props.add(courts).then(() => this.props.history.push("/courts"));
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <form className="courtsForm">
//           <div className="courts-form-group">
//             <label htmlFor="courtsName">Court Name:</label>
//             <input
//               type="courtName"
//               required="true"
//               className="courts-form-control"
//               onChange={this.handleFieldChange}
//               id="courtName"
//               placeholder="Court Name"
//             />
//           </div>
//           <div className="courts-form-group">
//             <label htmlFor="breed">Address:</label>
//             <input
//               type="address"
//               required="true"
//               className="courts-form-control"
//               onChange={this.handleFieldChange}
//               id="address"
//               placeholder="Address"
//             />
//           </div>
//           {/* <div className="courts-form-group">
//             <label htmlFor="hours">Hours of Operation:</label>
//             <div className="col-xs-12">
// 								Open at
// 								<DateTimeField
// 									defaultText="12:00AM"
// 								/>
// 								<pre> {'<DateTimeField defaultText="Please select a date" />'} </pre>
// 							</div>

//           </div> */}
//           <div className="courts-form-group">
//             <label htmlFor="courtType">Court Type::</label>
//             <div class="btn-group">
//               <button
//                 type="button"
//                 class="btn btn-default dropdown-toggle"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Select<span class="caret" />
//               </button>
//               <ul class="dropdown-menu">
//                 <li>
//                   <a href="#">Outdoor</a>
//                 </li>
//                 <li>
//                   <a href="#">Indoor</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <button
//             type="submit"
//             onClick={this.addNewCourt}
//             className="btn btn-primary"
//           >
//             Submit
//           </button>
//         </form>
//       </React.Fragment>
//     );
//   }
// }
