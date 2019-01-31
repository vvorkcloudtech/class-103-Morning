import React from "react";
import Nav from './Nav';
import Forum from './Forums';
import fire from '../../config/Fire';
import Login from './Login';
import Home from './Home';
import { Route } from "react-router-dom";
import HonorHub from "./HonorHub";
import AndroidPie from "./AndroidPie";
import OnePlus6T from "./OnePlus6T";
import Snapdragon855 from "./Snapdragon855";
import G5 from "./5G";
import Pixel3 from "./Pixel3";
import Samsung from "./Samsung";
import Root from "./root";
import PostCategory from "./PostCategory";
import Mata20Pro from "./Mate20Pro";
import Footer from './Footer';
import Tags from './tags';
// import Practice from './practice';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = ({
    user:{},
  });
  this.authListener = this.authListener.bind(this);
}
componentDidMount() {
  this.authListener();
}

authListener() {
  fire.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      this.setState({ user });
      localStorage.setItem('user', user.uid);
    } else {
      this.setState({ user: null });
      localStorage.removeItem('user');
    }
  });
}
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
        <Route path="/tags" component={Tags}/>
        {/* <Route path="/practice" component={Practice}/> */}
        {this.state.user ? (<Home/>) : (<Login/>)}

        <Footer/>
      </div>
    );
  }
}
export default App;
