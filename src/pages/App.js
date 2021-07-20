import React, { Component } from 'react';
import NavBar from '../components/navbar';
import Projects from '../components/projects';
import Designs from '../components/designs';
import Contact from '../components/contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useParams
} from "react-router-dom";

import './App.sass';

class App extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/projects">
                            <Projects />
                        </Route>
                        <Route exact path="/designs">
                            <Designs />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                    
                    <main>
                        <p>Hello World</p>
                    </main>
                </Router>
                
            </React.Fragment>
        );
    }
}
 
export default App;