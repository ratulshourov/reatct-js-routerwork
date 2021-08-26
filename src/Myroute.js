import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Notfound from './Notfound';
class Myroute extends Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/page1" component={Page1} />
                    <Route exact path="/page2" component={Page2} />
                    <Route exact path="/page3" component={Page3} />
                    <Route  component={Notfound} />
                </Switch>
            </div>
        );
    }
}
export default Myroute;