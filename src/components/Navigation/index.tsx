import React, { Component } from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";


import { Nav } from 'react-bootstrap';

import Time from './Time'
import Admin from '../Admin/AdminPage'
import Home from '../Home/index'
import Restaurant from '../Restaurant/RestaurantPage'

interface NavigationState {
    nowTime: string | undefined
}

interface NavigationProps {
}

interface INowTimeObj {
    year: number
    month: number
    date: number
    hours: number
    minutes: number | string
    day: string
}

class Navigation extends Component<NavigationProps, NavigationState> {

    private timer?: number | undefined = undefined

    constructor(props: NavigationProps) {
        super(props);
        this.state = { nowTime: '' };
        this.tick = this.tick.bind(this)
    }
    componentDidMount() {
        this.timer = setInterval(
            this.tick,
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        const _dateObj: Date = new Date()
        const _dayArray: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const _nowTimeObj: INowTimeObj = {
            year: _dateObj.getFullYear(),
            month: _dateObj.getMonth() + 1,
            date: _dateObj.getDate(),
            hours: _dateObj.getHours(),
            minutes: _dateObj.getMinutes() > 9 ? _dateObj.getMinutes() : '0' + _dateObj.getMinutes(),
            day: _dayArray[_dateObj.getDay()]
        }
        const nowTime = `${_nowTimeObj.year}/${_nowTimeObj.month}/${_nowTimeObj.date}  ${_nowTimeObj.hours}:${_nowTimeObj.minutes} ${_nowTimeObj.day}`
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
                <Time nowTime={this.state.nowTime} />
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