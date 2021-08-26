import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Page1 extends Component {
    
    render() {
       if(sessionStorage.getItem("username")==null){
return <Redirect to="/login"></Redirect>
       }else {
           return <h1>okkk Page 111</h1>
       }
        return (
            <div>
                
               page1 
               <Link to="/page2/:username"><button>Click Me</button></Link>
            </div>
        );
    }
}
export default Page1;