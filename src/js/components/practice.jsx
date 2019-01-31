// import React from "react";

// class Practice extends React.Component{

// state={
//     title:'',
//     class:'',
//     post:''
// }

// changeHandler=(e)=>{
//     e.preventDefault();
//     console.log(e.target.name);
//     this.setState(
//     { [e.target.name] :e.target.value }
//     )
// }

// submitHandler=(e)=>{
//     e.preventDefault();
//     this.setState({
//         title: this.state.title,
//         class: this.state.class,
//         post: this.state.post
//     })
// }

//     render(


//     ){
//         console.log(this.state)
//         return(
//             <div>
//                 <form action="" onSubmit={this.submitHandler}>
//             Title:    <input type="text" name='title' onChange={this.changeHandler} />
//             Class-Type:    <input type="text" name='class' onChange={this.changeHandler} />
//             Post:    <input type="text" name='post' onChange={this.changeHandler} />
//             <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Practice;
// // import React, { Component } from 'react'

// // export default class Practice extends Component {
// //     state = {
// //         Discussion: '',
// //         classTag: '',
// //         post: '',
// //     }
// //     render() {
// //         return (
// //             <div >
// //                 <br />
// //                 Discussion:<input onChange={} type="text" />
// //                 class tag:<input  type="text" />
// //                 post:<input  type="text" />
// //                 <button>SUBMIT</button>
// //                 <br />
// //                 <br />
// //             </div>
// //         )
// //     }
// // }

