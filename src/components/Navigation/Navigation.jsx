import React, { Component } from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Nav } from 'react-bootstrap';

import Admin from '../Admin/AdminPage'
import Home from '../Home/HomePage'
import Restaurant from '../Restaurant/RestaurantPage'


class Navigation extends Component {
    render() {
        return (
            <div>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/admin">admin</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/restaurant">restaurant</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                    <Route path="/restaurant">
                        <Restaurant />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Navigation