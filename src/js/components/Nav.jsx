import React from "react";
import { Data } from "./Data";


class Nav extends React.Component {
    state = {data:Data}

    
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
            <li><span># </span>{v.Nav.tagbarlist.li1}</li>
            <li><span># </span>{v.Nav.tagbarlist.li2}</li>
            <li><span># </span>{v.Nav.tagbarlist.li3}</li>
            <li><span># </span>{v.Nav.tagbarlist.li4}</li>
            <li><span># </span>{v.Nav.tagbarlist.li5}</li>
            <li><span># </span>{v.Nav.tagbarlist.li6}</li>
            <li><span># </span>{v.Nav.tagbarlist.li7}</li>
            <li><span># </span>{v.Nav.tagbarlist.li8}</li>
            <li><span># </span>{v.Nav.tagbarlist.li9}</li>
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
