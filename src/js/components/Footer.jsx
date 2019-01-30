import React ,{Component} from 'react';
import {Data} from './Data';
class Footer extends Component{
    state={
        crow:Data,
         }
render(){
    console.log(this.state.crow.footer)
    var res=this.state.crow.map((index,i)=>{
        return(
            <div key={i}>
            <p>{index.footer.data1.h1}</p>
            <div>{index.footer.data1.icon}</div>
            </div>
        )
    }
    )

    
    return(
        <div className="footer">
{res}
        </div>
    )
}

}
export default Footer;