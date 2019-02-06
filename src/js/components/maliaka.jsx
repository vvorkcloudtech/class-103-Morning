import React, { Component } from 'react';
import {Route} from "react-router-dom";
class Maliaka extends Component {
    render() {
        const output = this.props.all.map((res, i)=>{
           return(
               <Route path={"/post"+i} key={i} render={()=>{
                   return (
                    <div >
                        <div className="img">
                            <img src={res.img1} style={{width: "100%"}} />
                        </div><br />
                        <div className="secondDIV">
                            <span></span>
                            <span>
                                <span>anuary 25, 2019 11:30am</span>
                                <span>40 Comments</span>
                                <span>Mishaal Rahman</span>
                            </span>
                        </div>
                        <div>
                            <h1>{res.Heading1}</h1>
                            <p>{res.paragraph1}</p>
                            <p>{res.paragraph2}</p>
                            <p>{res.paragraph3}</p>
                            <p>{res.paragraph4}</p>
                        </div>
                        <div className="btnSection">
                            <button className="btn col-md-offset-5 col-lg-offset-5 col-sm-offset-4 col-xs-offset-4">{res.Yellowbtn1}</button><br />
                            <button className="btn col-md-offset-5 col-lg-offset-5 col-sm-offset-4 col-xs-offset-4">{res.Yellowbtn2}</button><br />
                            <button className="btn col-md-offset-5 col-lg-offset-5 col-sm-offset-4 col-xs-offset-4">{res.Yellowbtn3}</button><br />
                        </div>
                        <div>
                            <img src={res.MobileImg} className="img-responsive" />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={res.smallImg1} className="img-thumbnail" />
                            </div>
                            <div className="col-md-6">
                                <img src={res.smallImg2} className="img-thumbnail" />
                            </div>
                        </div>
                        <h4 className="text-center">{res.Heading2}</h4>
                        <p>{res.paragraph5}</p>
                        <div className="img-thumbnail">
                            <img src={res.img2} className="img-responsive" />
                            <p className="text-center">A close-up of the notch on the LG G8 ThinQ. (Image has been brightened in
                                Photoshop.)</p>
                        </div>
                        <p>{res.Heading3}</p>
                        <div className="row">
                            <div className="col-md-6 img-thumbnail">
                                <img src={res.img3} className="img-responsive" />
                                <p className="text-center">A close-up of the notch on the LG G7 ThinQ.</p>
                            </div>
                            <div className="col-md-6 img-thumbnail">
                                <img src={res.img4} className="img-responsive" />
                                <p className="text-center">A close-up of the notch on the LG V40 ThinQ.</p>
                            </div>
                        </div>
                        <div>
                            <h2>{res.Heading4}</h2>
                            <p>{res.paragraph6}</p>
                            <p>{res.update}</p>
                            <h2>{res.heading5}</h2>
                            <p>{res.paragraph7}</p>
                            <p>{res.paragraph8}</p>
                            <p>{res.paragraph9}</p>
                            <h2>{res.Heading6}</h2>
                            <p>{res.paragraph10}</p>
                        </div>
                    </div>
               )}}/>)
           
        })
        return (
            <div>
                <div className="width70">
                    <div className="row">
                        <div className="col-md-11 col-md-offset-1 col-lg-11 col-lg-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                            {output}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Maliaka;