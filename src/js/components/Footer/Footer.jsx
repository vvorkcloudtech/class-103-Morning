import React, { Component } from "react";
import {Link} from 'react-router-dom';

import { Data } from "../Data";


class Footer extends Component{
    state={
        data : Data,
        email:"",
        emails:[]
    }
    onChangeHandler=(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value }
            )}

    handleSubmit=(e)=>{
        e.preventDefault()
        let email=e.target.value;
        this.setState({
            email:this.state.email.valueOf(email),
            emails:[...this.state.emails,this.state.email]
        })
    }
         

    render(){
        console.log(this.state.emails)
        var stateData = this.state.data;
        var result = stateData.map((v,i)=>{
            return <div key={i}>
              
            <div className="footerLeft footerdiv">
            <img src={v.Footer.footerLeft.img} alt=""/>
                <p className="p1">{v.Footer.footerLeft.p}</p>
                <p className="p2"><Link to="/" className="footerlinks">{v.Footer.footerLeft.link1}</Link>
                <Link to="/" className="footerlinks">{v.Footer.footerLeft.link2}</Link></p>
               
            </div>
        <div className="MidDiv footerdiv">
        <p>{v.Footer.footerMid.h1}</p>
        <ul>
        { v.Footer.footerMid.links.map((index,k)=> {return(
               <li key={k}>
               <Link to={index.to} className="footerlink">{index.name}</Link>
               </li>)
           }
           )
        }
        </ul>
</div>
<div className="rightDiv footerdiv">
        <p>{v.Footer.footerRight.h1}</p>
        <ul>
        { v.Footer.footerRight.social.map((index,k)=> {return(
               <li key={k}>
               <Link to={index.link} className="footerlink"><i className={index.icon}></i></Link>
               </li>)
           }
           )
        }
        </ul>
        <br/><br/><br/>
        <form onSubmit={this.handleSubmit}>        
            <input type="email" name="email" placeholder="you@example.com" onChange={this.onChangeHandler}/>
            <button type="submit" >Subscribe</button>
        </form>

        
</div>

            
            </div>
        })

return(
<section className="footer">
 
{result}
    
</section>

) 
    }
}
export default Footer