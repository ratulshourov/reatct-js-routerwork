import React, { Component } from 'react';

class Page2 extends Component {
    constructor({match}){
        super();
        this.state={
            username:match.params.username
        }

    }
    
    render() {
       
        return (
            <div>
                
                page2 {this.state.username}
            </div>
        );
    }
}
export default Page2;