import React, { Component } from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";


import { Nav } from 'react-bootstrap';

import Admin from '../Admin/AdminPage'
import Home from '../Home/index'
import Restaurant from '../Restaurant/RestaurantPage'


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { nowTime: null, timer: null };
        this._tick = this._tick.bind(this)
    }
    componentDidMount() {
        this.timer = setInterval(
            this._tick,
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    _tick() {
        const dateObj = new Date()
        const _dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const nowTimeObj = {
            year: dateObj.getFullYear(),
            month: dateObj.getMonth() + 1,
            date: dateObj.getDate(),
            hours: dateObj.getHours(),
            minutes: dateObj.getMinutes() > 9 ? dateObj.getMinutes() : '0' + dateObj.getMinutes(),
            day: _dayArray[dateObj.getDay()]
        }
        const nowTime = `${nowTimeObj.year}/${nowTimeObj.month}/${nowTimeObj.date}  ${nowTimeObj.hours}:${nowTimeObj.minutes} ${nowTimeObj.day}`
        this.setState({ nowTime })
    }


    render() {
        return (
            <div>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/home">home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/admin">admin</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/restaurant">restaurant</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="time"><span>目前時間</span> {this.state.nowTime}</div>
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