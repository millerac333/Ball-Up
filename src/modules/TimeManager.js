// import "rc-time-picker/assets/index.css";
// import React from "react";
// // import ReactDom from "react-dom";
// import moment from "moment";
// import TimePicker from "rc-time-picker/lib";

// export default class TimeManager extends React.Component {
//   state = {
//     value: moment(),
//     open: false
//   };
//   handleValueChange = value => {
//     console.log(value && value.format("HH:mm:ss"));
//     this.setState({ value });
//   };
//   clear = () => {
//     this.setState({
//       value: undefined
//     });
//   };
//   setOpen = ({ open }) => {
//     this.setState({ open });
//   };
//   toggleOpen = () => {
//     this.setState({
//       open: !this.state.open
//     });
//   };
//   disableSeconds = ({ disabledSeconds }) => {
//     this.setState({ disabledSeconds });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div>
//           <form>
//             {
//               <TimePicker
//                 id={"startTime"}
//                 className={"start-time"}
//                 name={"open-time"}
//                 use12Hours={true}
//                 disabledSeconds={this.disableSeconds}
//                 defaultValue={this.state.value}
//                 onChange={this.handleValueChange}
//                 open={this.state.open}
//                 onOpen={this.setOpen}
//                 onClose={this.setOpen}
//                 focusOnOpen
//               />
//             }
//             {
//               <TimePicker
//                 name={"close-time"}
//                 id={"endTime"}
//                 className={"end-time"}
//                 use12Hours={true}
//                 disabledSeconds={this.disableSeconds}
//                 value={this.state.value}
//                 onChange={this.handleValueChange}
//                 open={this.state.open}
//                 onOpen={this.setOpen}
//                 onClose={this.setOpen}
//                 focusOnOpen
//               />
//             }
//             <button onClick={this.clear}>clear</button>
//           </form>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
