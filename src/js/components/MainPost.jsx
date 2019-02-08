import React from 'react';
import {Link} from "react-router-dom";
import DatatablePage from './p';

const MainPost = (props) => {

    var postResult = props.all.map((v,i)=>{
        return(
            <Link to={"/post"+i} onClick={props.click}>
                <div className="col-md-6" style={{paddingTop:'40px'}}>
                    <img src={v.img} style={{width:'100%',border:'1px solid #eee'}} alt=""/>
                    <h3>{v.title}</h3>
                </div>
            </Link>
        )
    })
    return (
        <div style={{width:'70%'}}>
            <div className="container-fluid" style={{width:'100%'}}>
                <div className="row">
                    <div className="col-md-11" style={{marginLeft:'8%'}}>
                        {postResult}
                    </div>
                </div>
                <div className="row left-set">
                    <div className="col-md-11" style={{marginLeft:'0%'}}>
                        <DatatablePage/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPost;