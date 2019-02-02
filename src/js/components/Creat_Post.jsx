import React from "react";

class Creat_Post extends React.Component{

    state = {

    }
    
    handleChange = (e) => {
        // let name = e.target.name
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            discussionTitle: this.state.discussionTitle,
            classTag: this.state.classTag,
            post: this.state.post
        })
    }

    render(){

        
   
    return(
        <div>
            <div className="creatPost">
                    <div className="form">
                    <h1>Creat Your Post</h1> 
                        <form onSubmit={this.handleSubmit}>
                            Title:  <input type="text" name='discussionTitle' onChange={this.handleChange} required/>
                            Class Tag:  <input type="text" name='classTag' placeholder="#"  onChange={this.handleChange}  required /><br/> <br/>
                            Post: <br/> <br/> <textarea name="post" id="" cols="106" rows="10" onChange={this.handleChange}></textarea> <br/> <br/>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
            </div>
        </div>
    )
  }
}

export default Creat_Post;
