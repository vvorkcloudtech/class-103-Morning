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
        hovers1:"",
        hovers2:"",
        hovers3:"",
        hovers4:"",
        hovers5:"",
        hovers6:"",
        hovers7:"",
        hovers8:"",
        hovers9:"",
        hovers10:"",
        hovers11:"",
        hovers12:"",
        hovers13:"",
        hovers14:"",
        hovers15:"",
        hovers16:"",
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
    
    //////start this devicse function
    mousef1 = (e) =>{
        this.setState({
            hovers1:true,
        
        })
    }
    mousefs1 = (e) =>{
        this.setState({
            hovers1:false,
            })
    }
    mousef2 = (e) =>{
        this.setState({
            hovers2:true,
        
        })
    }
    mousefs2 = (e) =>{
        this.setState({
            hovers2:false,
            })
    }
    mousef3 = (e) =>{
        this.setState({
            hovers3:true,
        
        })
    }
    mousefs3 = (e) =>{
        this.setState({
            hovers3:false,
            })
    }
    mousef4 = (e) =>{
        this.setState({
            hovers4:true,
        
        })
    }
    mousefs4 = (e) =>{
        this.setState({
            hovers4:false,
            })
    }
    mousef5 = (e) =>{
        this.setState({
            hovers5:true,
        
        })
    }
    mousefs5 = (e) =>{
        this.setState({
            hovers5:false,
            })
    }
    mousef6 = (e) =>{
        this.setState({
            hovers6:true,
        
        })
    }
    mousefs6 = (e) =>{
        this.setState({
            hovers6:false,
            })
    }
    mousef7 = (e) =>{
        this.setState({
            hovers7:true,
        
        })
    }
    mousefs7 = (e) =>{
        this.setState({
            hovers7:false,
            })
    }
    mousef8 = (e) =>{
        this.setState({
            hovers8:true,
        
        })
    }
    mousefs8 = (e) =>{
        this.setState({
            hovers8:false,
            })
    }
    mousef9 = (e) =>{
        this.setState({
            hovers9:true,
        
        })
    }
    mousefs9 = (e) =>{
        this.setState({
            hovers9:false,
            })
    }
    mousef10 = (e) =>{
        this.setState({
            hovers10:true,
        
        })
    }
    mousefs10 = (e) =>{
        this.setState({
            hovers10:false,
            })
    }
    mousef11 = (e) =>{
        this.setState({
            hovers11:true,
        
        })
    }
    mousefs11 = (e) =>{
        this.setState({
            hovers11:false,
            })
    }
    mousef12 = (e) =>{
        this.setState({
            hovers12:true,
        
        })
    }
    mousefs12 = (e) =>{
        this.setState({
            hovers12:false,
            })
    }
    mousef13 = (e) =>{
        this.setState({
            hovers13:true,
        
        })
    }
    mousefs13 = (e) =>{
        this.setState({
            hovers13:false,
            })
    }
    mousef14 = (e) =>{
        this.setState({
            hovers14:true,
        
        })
    }
    mousefs14 = (e) =>{
        this.setState({
            hovers14:false,
            })
    }
    mousef15 = (e) =>{
        this.setState({
            hovers15:true,
        
        })
    }
    mousefs15 = (e) =>{
        this.setState({
            hovers15:false,
            })
    }
    mousef16 = (e) =>{
        this.setState({
            hovers16:true,
        
        })
    }
    mousefs16 = (e) =>{
        this.setState({
            hovers16:false,
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
                   <li>{v.Nav.forumslist.li2}</li>
                   <li>{v.Nav.forumslist.li3}</li>
                   <li>{v.Nav.forumslist.li4}</li>
                   <li>{v.Nav.forumslist.li5}</li>
                   <li>{v.Nav.forumslist.li6}</li>
                   <li>{v.Nav.forumslist.li7}</li>
                   <li>{v.Nav.forumslist.li8}</li>
               </ul> <ul className="forums-list2">
                   <li>{v.Nav.forumslist.li9}</li>
                   <li>{v.Nav.forumslist.li10}</li>
                   <li>{v.Nav.forumslist.li11}</li>
                   <li>{v.Nav.forumslist.li12}</li>
                   <li>{v.Nav.forumslist.li13}</li>
                   <li>{v.Nav.forumslist.li14}</li>
               </ul>
                <ul className="forums-list3">
                   <li>{v.Nav.forumslist.li15}</li>
                   <li>{v.Nav.forumslist.li16}</li>
                   <li>{v.Nav.forumslist.li17}</li>
                   <li>{v.Nav.forumslist.li18}</li>
                   <li>{v.Nav.forumslist.li19}</li>
               </ul>
               <h4>Fourm Home</h4>
               </div>
               : ""}
            </li>


            <li onMouseEnter={this.mousefn2} onMouseLeave={this.mousefns2}>{v.Nav.DEVICES} <i className="fas fa-angle-down"></i>
            {this.state.hover2 ?
               <div className="nav-list2">
               <ul className="devices-list">
                   <li onMouseEnter={this.mousef1} onMouseLeave={this.mousefs1}>{v.Nav.deviceslist.LI1}
                   {this.state.hovers1 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li1.img} /><p>{v.Nav.newsList.li1.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li2.img} /><p>{v.Nav.newsList.li2.p}</p></span></li> 
            <li><span><img src={v.Nav.newsList.li4.img} /><p>{v.Nav.newsList.li4.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
            </ul>
            <div className="tip"></div>
            </div>
             : ""}
                   </li>
                   <li onMouseEnter={this.mousef2} onMouseLeave={this.mousefs2}>{v.Nav.deviceslist.li2}
                   {this.state.hovers2 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li9.img} /><p>{v.Nav.newsList.li9.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
                   </li>
                   <li onMouseEnter={this.mousef3} onMouseLeave={this.mousefs3}>{v.Nav.deviceslist.li3}
                   {this.state.hovers3 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li9.img} /><p>{v.Nav.newsList.li9.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li1.img} /><p>{v.Nav.newsList.li1.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li2.img} /><p>{v.Nav.newsList.li2.p}</p></span></li> 
           <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             <li onMouseEnter={this.mousef5} onMouseLeave={this.mousefs5}>{v.Nav.deviceslist.li5}
                   {this.state.hovers5 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
                   <li>{v.Nav.deviceslist.li6}</li>
                   <li>{v.Nav.deviceslist.Li7}</li>
                 
               </ul> 
               <ul className="devices-list2">
               <li onMouseEnter={this.mousef6} onMouseLeave={this.mousefs6}>{v.Nav.deviceslist.LI2}
                   {this.state.hovers6 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li9.img} /><p>{v.Nav.newsList.li9.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li1.img} /><p>{v.Nav.newsList.li1.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li2.img} /><p>{v.Nav.newsList.li2.p}</p></span></li> 
           <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             <li onMouseEnter={this.mousef4} onMouseLeave={this.mousefs4}>{v.Nav.deviceslist.li4}
                   {this.state.hovers4 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             <li onMouseEnter={this.mousef11} onMouseLeave={this.mousefs11}>{v.Nav.deviceslist.li8}
                   {this.state.hovers11 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             <li onMouseEnter={this.mousef8} onMouseLeave={this.mousefs8}>{v.Nav.deviceslist.li9}
                   {this.state.hovers8 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             <li onMouseEnter={this.mousef9} onMouseLeave={this.mousefs9}>{v.Nav.deviceslist.li10}
                   {this.state.hovers9 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             <li onMouseEnter={this.mousef10} onMouseLeave={this.mousefs10}>{v.Nav.deviceslist.li11}
                   {this.state.hovers10 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             
             
             </ul>
                <ul className="devices-list3">

                   <li onMouseEnter={this.mousef7} onMouseLeave={this.mousefs7}>{v.Nav.deviceslist.LI3}
                   {this.state.hovers7 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li9.img} /><p>{v.Nav.newsList.li9.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li1.img} /><p>{v.Nav.newsList.li1.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li2.img} /><p>{v.Nav.newsList.li2.p}</p></span></li> 
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             <li onMouseEnter={this.mousef12} onMouseLeave={this.mousefs12}>{v.Nav.deviceslist.li12}
                   {this.state.hovers12 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             
             <li onMouseEnter={this.mousef13} onMouseLeave={this.mousefs13}>{v.Nav.deviceslist.li13}
                   {this.state.hovers13 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             
             <li onMouseEnter={this.mousef14} onMouseLeave={this.mousefs14}>{v.Nav.deviceslist.li14}
                   {this.state.hovers14 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             
             <li onMouseEnter={this.mousef15} onMouseLeave={this.mousefs15}>{v.Nav.deviceslist.li15}
                   {this.state.hovers15 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
             
             <li onMouseEnter={this.mousef16} onMouseLeave={this.mousefs16}>{v.Nav.deviceslist.li16}
                   {this.state.hovers16 ? 
                   <div className="devices-list-start">
            <ul className="deviceslist">
            <li><span><img src={v.Nav.newsList.li7.img} /><p>{v.Nav.newsList.li7.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li8.img} /><p>{v.Nav.newsList.li8.p}</p></span></li>
            <li><span><img src={v.Nav.newsList.li10.img} /><p>{v.Nav.newsList.li10.p}</p></span></li>
             </ul>
            <div className="tip"></div>
            </div>
             : ""}
             </li>
               </ul>
               <hr className="hr" />
               <h4>More</h4>
               </div>
               : ""}
            </li>

















            <li onMouseEnter={this.mousefn3} onMouseLeave={this.mousefns3}>{v.Nav.topics} <i className="fas fa-angle-down"></i>
            {this.state.hover3 ?
               <div className="nav-list3">
               <ul className="topic-list">
                   <li>{v.Nav.topiclist.LI1}
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
       
                   </li>






                   <li>{v.Nav.topiclist.LI1}</li>
                   <li>{v.Nav.topiclist.li2}</li>
                   <li>{v.Nav.topiclist.li3}</li>
                   <li>{v.Nav.topiclist.li4}</li>
                   <li>{v.Nav.topiclist.li5}</li>
                   <li>{v.Nav.topiclist.li6}</li>
                   <li>{v.Nav.topiclist.li7}</li>
                   <li>{v.Nav.topiclist.li8}</li>
                   <li>{v.Nav.topiclist.li9}</li>
                   <li>{v.Nav.topiclist.li10}</li>
                   <li>{v.Nav.topiclist.li11}</li>
                   <li>{v.Nav.topiclist.li12}</li>
               </ul> <ul className="topic-list2">
                   <li>{v.Nav.topiclist.li13}</li>
                   <li>{v.Nav.topiclist.li14}</li>
                   <li>{v.Nav.topiclist.li15}</li>
                   <li>{v.Nav.topiclist.li16}</li>
                   <li>{v.Nav.topiclist.li17}</li>
                   <li>{v.Nav.topiclist.li18}</li>
               </ul>
               </div>
               : ""}
            
            
            
            
            </li>
            <li onMouseEnter={this.mousefn4} onMouseLeave={this.mousefns4}>{v.Nav.bestPosts} <i className="fas fa-angle-down"></i>
            {this.state.hover4 ?
               <div className="nav-list4">
               <ul className="post-list">
                   <li>{v.Nav.postlist.LI1}</li>
                   <li>{v.Nav.postlist.li2}</li>
                   <li>{v.Nav.postlist.li3}</li>
                   <li>{v.Nav.postlist.li4}</li>
                   <li>{v.Nav.postlist.li5}</li>
                   <li>{v.Nav.postlist.li6}</li>
                   <li>{v.Nav.postlist.li7}</li>
                   <li>{v.Nav.postlist.li8}</li>
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
