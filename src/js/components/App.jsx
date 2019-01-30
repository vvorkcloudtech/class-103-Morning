import React from "react";
import Nav from './Nav';
import Forum from './Forums';
import { Route } from "react-router-dom";
import HonorHub from "./HonorHub";
import AndroidPie from "./AndroidPie";
import OnePlus6T from "./OnePlus6T";
import Snapdragon855 from "./Snapdragon855";
import G5 from "./5G";
import Pixel3 from "./Pixel3";
import Samsung from "./Samsung";
import Root from "./root";
import Mata20Pro from "./Mate20Pro";
import Footer from './Footer';
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Heading One Team Work 
          </h1>

     <Nav />
        <Route path="/HonorHub" component={HonorHub}/> 
        <Route path="/AndroidPie" component={AndroidPie}/>
        <Route path="/OnePlus6T" component={OnePlus6T}/>
        <Route path="/Snapdragon855" component={Snapdragon855}/>
        <Route path="/5G" component={G5}/>
        <Route path="/Pixel3" component={Pixel3}/>
        <Route path="/Samsung" component={Samsung}/>
        <Route path="/Root" component={Root}/>
        <Route path="/Mate20Pro" component={Mata20Pro}/>
        <Forum />

        <Footer/>
      </div>
    );
  }
}
export default App;
