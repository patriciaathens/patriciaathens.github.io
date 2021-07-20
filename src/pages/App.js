import React, { Component } from 'react';
import NavBar from '../components/navbar';
import Projects from '../components/projects';
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