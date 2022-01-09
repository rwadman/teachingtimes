import "./index.css"
import { Container, Menu } from "semantic-ui-react"
import {
    NavLink,
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom"
import React, { Component } from "react"
import Home from "./Home"
import Schedule from "./schedule/Schedule"
import SetupAvailableTimes from "./availableTimes/SetupAvailableTimes"

interface MenuItemProps {
    url: string,
    name: string,
    idx: number
    exact?: boolean
}

const MenuItem = ({ url, name, exact, idx }: MenuItemProps) => (
    <Menu.Item
        index={idx}
        as={NavLink}
        to={url}
        header={idx === 0}
        exact={exact}
    >{name}</Menu.Item>
)


class Main extends Component {
    render() {
        const pages = [
            {
                name: "Home",
                url: "/",
                content: <Home />,
                exact: true
            },
            {
                name: "Setup Available Times",
                url: "/available-setup",
                content: <SetupAvailableTimes />
            },
            {
                name: "Schedule",
                url: "/schedule",
                content: <Schedule />
            }
        ]
        return (
            <Router>
                <Menu fixed="top" inverted>
                    <Container>
                        <Menu.Item header>Teaching times</Menu.Item>
                        {pages.map(
                            (page, i) =>
                                <MenuItem
                                    key={i}
                                    url={page.url}
                                    name={page.name}
                                    exact={page.exact} idx={i} />
                        )}
                    </Container>
                </Menu>
                <div style={{ marginTop: 50 }}>
                    <div className="content">
                        <Switch>
                            {pages.map(
                                (page, i) =>
                                    <Route path={page.url} exact={page.exact} key={i}>{page.content}</Route>
                            )}
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main