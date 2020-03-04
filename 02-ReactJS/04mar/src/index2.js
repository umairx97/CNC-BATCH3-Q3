// import React, { Fragment, Component } from "react";
// import { render } from "react-dom";

// const App = props => {
//   return (
//     <div>
//       <h1>This is app component {props.name}</h1>
//     </div>
//   );
// };

// const HigherOrderComponent = ({ component: Component, isLoggedIn, ...rest }) => {
//   return (
//     <Fragment>
//       {isLoggedIn ? <Component {...rest} /> : <div>You are not authorized to view this component</div>}
//     </Fragment>
//   )
// }

// const Home = (props) => <h1>This is home component {props.age}</h1>
// render(
//   <div>
//     <HigherOrderComponent name="umair" isLoggedIn={true} component={App} />
//     <HigherOrderComponent age={22} isLoggedIn={true} component={Home} />
//   </div>,
//   document.getElementById("root")
// );

