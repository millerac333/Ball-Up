// import {
//   Navbar,
//   NavbarBrand,
//   NavbarBurger,
//   NavbarMenu,
//   NavbarStart,
//   NavbarItem,
//   NavbarLink,
//   NavbarDropdown,
//   NavbarDivider,
//   NavbarEnd,
//   Control,
//   Button
// } from "bloomer";
// import React, { Component } from "react";

// export default class BallUpNavBar extends Component {
//   render() {
//     return (
//       <Navbar style={{ border: "solid 1px #00D1B2", margin: "0" }}>
//         <NavbarBrand>
//           <NavbarBurger
//             isActive={this.state.isActive}
//             onClick={this.onClickNav}
//           />
//         </NavbarBrand>
//         <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
//           <NavbarStart>
//             <NavbarItem href="#/">Home</NavbarItem>
//             <NavbarItem hasDropdown isHoverable>
//               <NavbarLink href="#/documentation">Games</NavbarLink>
//               <NavbarDropdown>
//                 <NavbarItem href="../../components/GamesList">
//                   Game List
//                 </NavbarItem>
//                 <NavbarDivider />
//                 <NavbarItem href="../../components/GameForm">
//                   Add Games
//                 </NavbarItem>
//               </NavbarDropdown>
//             </NavbarItem>
//             <NavbarItem hasDropdown isHoverable>
//               <NavbarLink href="/documentation">Basketball Courts</NavbarLink>
//               <NavbarDropdown>
//                 <NavbarItem href="../../components/CourtsList">
//                   Courts List
//                 </NavbarItem>
//                 <NavbarDivider />
//                 <NavbarItem href="../../components/CourtForm">
//                   Court Form
//                 </NavbarItem>
//               </NavbarDropdown>
//             </NavbarItem>
//           </NavbarStart>
//           <NavbarEnd>
//             <NavbarItem>
//               <Control>
//                 <Button id="logout" target="_blank">
//                   <span>Logout</span>
//                 </Button>
//               </Control>
//             </NavbarItem>
//           </NavbarEnd>
//         </NavbarMenu>
//       </Navbar>
//     );
//   }
// }
