import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Home from "./Home"
import Stuff from "./Stuff"
import Contact from "./Contact"
import "./index.css"

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/stuff">Stuff</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="content">
                        <Switch>
                            <Route path="/stuff">
                                <Stuff />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main