import React from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";


class Nav extends React.Component {
    state = {
        data:Data
    }
  render() {
      var stateData=this.state.data;
      console.log(stateData)
      var res = stateData.map((v,i)=>{
        return <div key={i}>
            <div className="nav">
        <img src={v.Nav.img}/>
        <ul className="list">
            <li>{v.Nav.news} <i class="fas fa-angle-down"></i></li>
            <li>{v.Nav.forums} <i class="fas fa-angle-down"></i></li>
            <li>{v.Nav.DEVICES} <i class="fas fa-angle-down"></i></li>
            <li>{v.Nav.topics} <i class="fas fa-angle-down"></i></li>
            <li>{v.Nav.bestPosts} <i class="fas fa-angle-down"></i></li>
        </ul>


        
        </div>
        <div className="part-nav">
        <ol className="tagbar-list">
<li><span># </span><Link to="/HonorHub">{v.Nav.tagbarlist.li1}</Link></li>
<li><span># </span><Link to="/AndroidPie">{v.Nav.tagbarlist.li2}</Link></li>
<li><span># </span><Link to="/OnePlus6T">{v.Nav.tagbarlist.li3}</Link></li>
<li><span># </span><Link to="/Snapdragon855">{v.Nav.tagbarlist.li4}</Link></li>
<li><span># </span><Link to="/5G">{v.Nav.tagbarlist.li5}</Link></li>
<li><span># </span><Link to="/Pixel3">{v.Nav.tagbarlist.li6}</Link></li>
<li><span># </span><Link to="/Samsung">{v.Nav.tagbarlist.li7}</Link></li>
<li><span># </span><Link to="/Root">{v.Nav.tagbarlist.li8}</Link></li>
<li><span># </span><Link to="/Mate20Pro">{v.Nav.tagbarlist.li9}</Link></li>
</ol>
        </div>
        </div>
      })
    return (
      <div>
          {res}
        </div>
    );
  }
}
export default Nav;
