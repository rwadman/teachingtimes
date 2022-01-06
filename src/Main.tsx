import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom"
import Home from "./Home"
import SetupAvailableTimes from "./availableTimes/SetupAvailableTimes"
import Schedule from "./Schedule"
import "./index.css"

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/available-setup">Setup Available Times</NavLink></li>
                        <li><NavLink to="/schedule">Schedule</NavLink></li>
                    </ul>
                    <div className="content">
                        <Switch>
                            <Route path="/available-setup">
                                <SetupAvailableTimes />
                            </Route>
                            <Route path="/contact">
                                <Schedule />
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