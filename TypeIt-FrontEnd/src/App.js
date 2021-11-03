import './App.css';
import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import Note from './components/Note';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (<>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/note">
                    <Note textColor='white' bgColor='primary'/>
                </Route>
            </Switch>
        </Router>
    </>
    );
}

export default App;
