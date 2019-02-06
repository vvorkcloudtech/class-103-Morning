import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav";
<<<<<<< HEAD
import fire from '../../config/Fire';
import Login from './Login';
import Home from './Home';
=======
>>>>>>> 58fb45ecd72bbc554eab0d4036c064b2f780b49d
import HonorHub from "./HonorHub";
import AndroidPie from "./AndroidPie";
import OnePlus6T from "./OnePlus6T";
import Snapdragon855 from "./Snapdragon855";
import G5 from "./5G";
import Pixel3 from "./Pixel3";
import Samsung from "./Samsung";
import Root from "./root";
import Mata20Pro from "./Mate20Pro";
<<<<<<< HEAD
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
import {Data} from "./Data";
import MainHome from "./mainHome";
import Maliaka from "./maliaka";
=======

>>>>>>> 58fb45ecd72bbc554eab0d4036c064b2f780b49d

class App extends React.Component {
constructor(props){
  super(props);
  this.state = ({
    user:{},
    data:Data

  });

  this.authListener = this.authListener.bind(this);
}
componentDidMount() {
  this.authListener();
}
authListener() {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
      localStorage.setItem('user', user.uid);
    } else {
      this.setState({ user: null });
      localStorage.removeItem('user');
    }
  });
}

fourRouteArr=[1,2,3,4]

res = this.fourRouteArr.map((v,i)=>{
  return(
    <Route path={"/post"+i} key={i} render={()=><Maliaka all={this.state.data[0].data1}/>}/>

  )
})


  render() {
    return (
      <div>
<<<<<<< HEAD
        <Nav />
        <Route exact path="/" render={()=><MainHome main={this.state.data[0].PostData}/>}/>
        {this.res}
=======
     <Nav />
>>>>>>> 58fb45ecd72bbc554eab0d4036c064b2f780b49d
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

<<<<<<< HEAD

        {this.state.user ? (<Home/>) : (<Login/>)}

{/* Footer starts here */}
        <Footer/>
        <Route path="/rules" component={Rules}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/privacyPolicies" component={PrivacyPolicy}/>
        <Route path="/rootDevice" component={RootDevice}/>
        <Route path="/security" component={SecurityPolicy}/>
        <Route path="/SuggestContent" component={SuggestContent}/>
        {/* <Route path="/advertise" component={Advertise}/> */}
        {/* Footer ends Here */}

=======
>>>>>>> 58fb45ecd72bbc554eab0d4036c064b2f780b49d
      </div>
    );
  }
}
export default App;
