import React, { Component } from 'react';
import NavBar from '../components/navbar';
import Main from '../components/main';
import About from '../components/about';
import Projects from '../components/projects';
import Designs from '../components/designs';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useParams
} from "react-router-dom";

import portrait from '../images/portrait.jpg';

import './App.sass';

class App extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <Main />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/projects">
                            <Projects />
                        </Route>
                        <Route exact path="/designs">
                            <Designs />
                        </Route>
                    </Switch>
                    
                    
                    
                </Router>
                
            </React.Fragment>
        );
    }
}
 
export default App;