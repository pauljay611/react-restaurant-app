import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import RestaurantList from '../RestaurantList/index'

class HomePage extends Component {
    constructor(props) {
        super(props);
        const dateObj = new Date()
        const dayArray = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
        const nowTime = `${dateObj.getFullYear()}/${dateObj.getMonth() + 1}/${dateObj.getDate()}  ${dateObj.getHours()}:${dateObj.getMinutes()} ${dayArray[dateObj.getDay() - 1]}`
        this.state = { restaurantList: [], nowTime };
    }
    render() {
        return (
            <div>
                <h1>HomePage</h1>
                <div className="time"><span>目前時間</span> {this.state.nowTime}</div>
                <input type="text" placeholder="查詢餐廳" />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Site</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RestaurantList />
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default HomePage