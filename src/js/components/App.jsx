import React from "react";
import { Route } from "react-router-dom";
// Footer imports start
import Footer from './Footer/Footer';
// import SecurityPolicy from './Footer/Secrity';
// import Contact from './Footer/Contact';
// import Advertise from './Footer/Advertise';
// import PrivacyPolicy from './Footer/PrivacyPolicy';
// import Rules from './Footer/Rules';
// import SuggestContent from './Footer/SuggestContent';
// import RootDevice from './Footer/RootDevice';
// Footer imoorts ends

class App extends React.Component {
  render() {
    return (
      <div>
        <Footer/>
        {/* <Route path="/rules" component={Rules}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/privacyPolicies" component={PrivacyPolicy}/>
        <Route path="/rootDevice" component={RootDevice}/>
        <Route path="/security" component={SecurityPolicy}/>
        <Route path="/SuggestContent" component={SuggestContent}/>
        <Route path="/advertise" component={Advertise}/> */}
        {/* Footer ends Here */}

      </div>
    );
  }
}
export default App;
