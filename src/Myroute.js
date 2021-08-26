import React, { Component } from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
class Myroute extends Component {
    
    render() {
       
        return (
            <div>
                <Route exact path="/page1" component={Page1}/>
                <Route exact path="/page2" component={Page2}/>
                <Route exact path="/page3" component={Page3}/>
                
            </div>
        );
    }
}
export default Myroute;