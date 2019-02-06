import React, { Component } from 'react';
import MainPost from "./MainPost";
class MainHome extends Component {
    render() {
        console.log(this.props.main)
        return (
            <div>
                <MainPost all={this.props.main}/>
            </div>
        );
    }
}

export default MainHome;