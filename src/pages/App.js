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
                    
                    <div class="card">
                    {/* <img class="card-img-top" src="" alt="Card image cap" /> */}
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </Router>
                
            </React.Fragment>
        );
    }
}
 
export default App;