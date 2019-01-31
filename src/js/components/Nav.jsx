import React from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";


class Nav extends React.Component {
    state = {
        data:Data,
        hover:"",
        hover1:"",
        hover2:"",
        hover3:"",
        hover4:"",
    }
    mousefn = (e) =>{
        this.setState({
            hover:true,
        
        })
    }
    mousefns = (e) =>{
        this.setState({
            hover:false,
            })
    }
    
    mousefn1 = (e) =>{
        this.setState({
                hover1:true
        })
    }
    mousefns1 = (e) =>{
        this.setState({
            hover1:false
        })
    }
    
    mousefn2 = (e) =>{
        this.setState({
                hover2:true
        })
    }
    mousefns2 = (e) =>{
        this.setState({
            hover2:false
        })
    }
    mousefn3 = (e) =>{
        this.setState({
                hover3:true
        })
    }
    mousefns3 = (e) =>{
        this.setState({
            hover3:false
        })
    }
    
    mousefn4 = (e) =>{
        this.setState({
                hover4:true
        })
    }
    mousefns4 = (e) =>{
        this.setState({
            hover4:false
        })
    }
    
    
  render() {
      var stateData=this.state.data;
      console.log(stateData)
      var res = stateData.map((v,i)=>{
        return <div key={i}>
            <div className="nav">
        <img src={v.Nav.img}/>

        <ul className="list">
            <li onMouseEnter={this.mousefn} onMouseLeave={this.mousefns}>{v.Nav.news} <i className="fas fa-angle-down"></i>
            {this.state.hover ? <div className="nav-list">
            <ul className="news-list">
            <li><span><img src={v.Nav.newsList.li1.img} /><p>{v.Nav.newsList.li1.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li2.img} /><p>{v.Nav.newsList.li2.p}</p></span></li> 
            <li><span><img src={v.Nav.newsList.li3.img} /><p>{v.Nav.newsList.li3.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li4.img} /><p>{v.Nav.newsList.li4.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li5.img} /><p>{v.Nav.newsList.li5.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li6.img} /><p>{v.Nav.newsList.li6.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li9.img} /><p>{v.Nav.newsList.li9.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
            </ul>
            </div>
             : ""}
        </li >

            <li onMouseEnter={this.mousefn1} onMouseLeave={this.mousefns1}>{v.Nav.forums} <i className="fas fa-angle-down"></i>
            {this.state.hover1 ?
               <div className="nav-list1">
               <ul className="forums-list">
                   <li>{v.Nav.forumslist.li1}</li>
                   <li>{v.Nav.forumslist.li1}</li>
                   <li>{v.Nav.forumslist.li1}</li>
                   <li>{v.Nav.forumslist.li1}</li>
                   <li>{v.Nav.forumslist.li1}</li>
                   <li>{v.Nav.forumslist.li1}</li>
                   <li>{v.Nav.forumslist.li1}</li>
                   <li>{v.Nav.forumslist.li1}</li>
               </ul> <ul className="forums-list2">
                   <li>{v.Nav.forumslist.li2}</li>
                   <li>{v.Nav.forumslist.li2}</li>
                   <li>{v.Nav.forumslist.li2}</li>
                   <li>{v.Nav.forumslist.li2}</li>
                   <li>{v.Nav.forumslist.li2}</li>
                   <li>{v.Nav.forumslist.li2}</li>
               </ul>
                <ul className="forums-list3">
                   <li>{v.Nav.forumslist.li3}</li>
                   <li>{v.Nav.forumslist.li3}</li>
                   <li>{v.Nav.forumslist.li3}</li>
                   <li>{v.Nav.forumslist.li3}</li>
                   <li>{v.Nav.forumslist.li3}</li>
               </ul>
               <h2>Fourm Home</h2>
               </div>
               : ""}
            </li>







            <li onMouseEnter={this.mousefn2} onMouseLeave={this.mousefns2}>{v.Nav.DEVICES} <i className="fas fa-angle-down"></i>
            {this.state.hover2 ?
               <div className="nav-list2">
               <ul className="devices-list">
                   <li>{v.Nav.deviceslist.LI1}</li>
                   <li>{v.Nav.deviceslist.LI1}</li>
                   <li>{v.Nav.deviceslist.LI1}</li>
                   <li>{v.Nav.deviceslist.LI1}</li>
                   <li>{v.Nav.deviceslist.LI1}</li>
                   <li>{v.Nav.deviceslist.LI1}</li>
                   <li>{v.Nav.deviceslist.LI1}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
               </ul> <ul className="devices-list2">
                   <li>{v.Nav.deviceslist.LI2}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
               </ul>
                <ul className="devices-list3">
                   <li>{v.Nav.deviceslist.LI3}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
                   <li>{v.Nav.deviceslist.LI2}</li>
               </ul>
               </div>
               : ""}
            </li>
            <li onMouseEnter={this.mousefn3} onMouseLeave={this.mousefns3}>{v.Nav.topics} <i className="fas fa-angle-down"></i>
            {this.state.hover3 ?
               <div className="nav-list3">
               <ul className="topic-list">
                   <li>{v.Nav.topiclist.LI1}</li>
                   <li>{v.Nav.topiclist.LI1}</li>
                   <li>{v.Nav.topiclist.LI1}</li>
                   <li>{v.Nav.topiclist.LI1}</li>
                   <li>{v.Nav.topiclist.LI1}</li>
                   <li>{v.Nav.topiclist.LI1}</li>
                   <li>{v.Nav.topiclist.LI1}</li>
                   <li>{v.Nav.topiclist.LI1}</li>
                   <li>{v.Nav.topiclist.LI1}</li>
               </ul> <ul className="topic-list2">
                   <li>{v.Nav.topiclist.LI2}</li>
                   <li>{v.Nav.topiclist.LI2}</li>
                   <li>{v.Nav.topiclist.LI2}</li>
                   <li>{v.Nav.topiclist.LI2}</li>
                   <li>{v.Nav.topiclist.LI2}</li>
                   <li>{v.Nav.topiclist.LI2}</li>
               </ul>
               </div>
               : ""}
            
            
            
            
            </li>
            <li onMouseEnter={this.mousefn4} onMouseLeave={this.mousefns4}>{v.Nav.bestPosts} <i className="fas fa-angle-down"></i>
            {this.state.hover4 ?
               <div className="nav-list4">
               <ul className="post-list">
                   <li>{v.Nav.postlist.LI1}</li>
                   <li>{v.Nav.postlist.LI1}</li>
                   <li>{v.Nav.postlist.LI1}</li>
                   <li>{v.Nav.postlist.LI1}</li>
                   <li>{v.Nav.postlist.LI1}</li>
                   <li>{v.Nav.postlist.LI1}</li>
                   <li>{v.Nav.postlist.LI1}</li>
                   <li>{v.Nav.postlist.LI1}</li>
                   <li>{v.Nav.postlist.LI1}</li>
               </ul>
               </div>
               : ""}
            
            
            </li>
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
