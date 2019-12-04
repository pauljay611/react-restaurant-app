import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import restaurantApi from '../api/index'

class HomePage extends Component {
    constructor(props) {
        super(props);
        const dateObj = new Date()
        const dayArray = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
        const nowTime = `${dateObj.getFullYear()}/${dateObj.getMonth() + 1}/${dateObj.getDate()}  ${dateObj.getHours()}:${dateObj.getMinutes()} ${dayArray[dateObj.getDay() - 1]}`
        this.state = { restaurantList: [], nowTime };
    }

    componentDidMount() {
        restaurantApi.then((res) => {
            const restaurantList = res.map((item, index) => <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.time}</td>
            </tr>)
            this.setState({ restaurantList });
        })
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
                            <th>Open Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.restaurantList}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default HomePage