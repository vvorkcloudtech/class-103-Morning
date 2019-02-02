import React from 'react'


class Sign_Up extends React.Component{

    render(){

        return(
            <div>
                <div className="sign_up">
                    <div className="container">
                        <div className="form">
                            <form action="">
                                <h1>Sign Up</h1>
                                <input type="text" placeholder="Username" required/><br/>
                                <input type="email"  placeholder="E-mail" required/><br/>
                                <input type="password"  placeholder="Password" required/><br/>
                                <input type="password"  placeholder="Retype Password" required/><br/><br/><br/>
                                <button>SIGN ME UP</button>
                                <h3>OR</h3>
                            </form>
                        </div>
                        

                        <div className="sign_up_via_socialmedia">
                                <div className="links">
                                    <h1>Sign In With Social Media</h1>
                                    <button>Login with Facebook</button><br/>
                                    <button className="btn1">Login with Twitter</button><br/>
                                    <button  className="btn2">Login with Google+</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sign_Up 