import React from 'react';
import {Link} from "react-router-dom";

const MainPost = (props) => {

    var postResult = props.all.map((v,i)=>{
        return(
            <Link to={"/post"+i} onClick={props.click}>
                <div className="col-md-6" style={{paddingTop:'40px'}}>
                    <img src={v.img} style={{width:'100%'}} alt="" style={{border:'1px solid #eee'}}/>
                    <h3>{v.title}</h3>
                </div>
            </Link>
        )
    })
    
    console.log(props.all[0].img)
    
    return (
        <div style={{width:'70%',border:'1px solid'}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-11" style={{marginLeft:'100px'}}>
                        {postResult}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPost;