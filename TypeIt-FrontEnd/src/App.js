import './App.css';
import FAQs from './components/FAQs';
import Home from "./components/Home";
import React from "react";
import About from "./components/About";
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import MyAccount from './components/MyAccount';
import NoteState from './context/note/NoteState';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    return (<>
        <NoteState>
            <Router>
                <Navbar />
                <div className="pt-3">
                    <div className="container">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/myAccount">
                                <MyAccount />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route exact path="/faqs">
                                <FAQs />
                            </Route>
                        </Switch>
                    </div>
                    {/* <Alert message="" /> */}
                </div>
            </Router>
        </NoteState>
    </>
    );
}

export default App;