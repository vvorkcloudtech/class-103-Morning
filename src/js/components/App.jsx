import React from "react";

// import Nav from './Nav';


import Nav from "./Nav";
import { Route } from "react-router-dom";
//Nav import start

import Forum from './Forums';
import fire from '../../config/Fire';
import Login from './Login';
import Home from './Home';
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
// Footer imports start
import Footer from './Footer/Footer';
import SecurityPolicy from './Footer/Secrity';
import Contact from './Footer/Contact';
import Advertise from './Footer/Advertise';
import PrivacyPolicy from './Footer/PrivacyPolicy';
import Rules from './Footer/Rules';
import SuggestContent from './Footer/SuggestContent';
import RootDevice from './Footer/RootDevice';
// Footer imoorts ends
import Tags from './tags';
import Practice from './practice';

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
        {/* <h1>
          Heading One Team Work 
          </h1>
          <PostCategory/>
         
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
        <Route path="/practice" component={Practice}/>
        {this.state.user ? (<Home/>) : (<Login/>)}

{/* Footer starts here */}
        <Footer/>
        <Route path="/rules" component={Rules}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/privacyPolicies" component={PrivacyPolicy}/>
        <Route path="/rootDevice" component={RootDevice}/>
        <Route path="/security" component={SecurityPolicy}/>
        <Route path="/SuggestContent" component={SuggestContent}/>
        <Route path="/advertise" component={Advertise}/>
        {/* Footer ends Here */}

      </div>
    );
  }
}
export default App;
