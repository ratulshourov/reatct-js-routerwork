import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page1 extends Component {
    
    render() {
       
        return (
            <div>
                
               page1 
               <Link to="/page2/:username"><button>Click Me</button></Link>
            </div>
        );
    }
}
export default Page1;