import React from "react";
import Nav from "./Nav";
import Sign_Up from "./Sign_Up";
import Creat_Post from "./Creat_Post";
// import { Route } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Sign_Up />
        <Creat_Post />

      </div>
    );
  }
}
export default App;
