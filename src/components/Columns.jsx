import React, { Component } from "react";
import restaurantApi from '../api/index'

class Colummns extends Component {
    constructor(props) {
        super(props);
        const dateObj = new Date()
        const dayArray = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
        const nowTime = `${dateObj.getFullYear()}/${dateObj.getMonth() + 1}/${dateObj.getDate()}  ${dateObj.getHours()}:${dateObj.getMinutes()} ${dayArray[dateObj.getDay() - 1]}`
        this.state = { restaurantList: [], nowTime };
    }

    componentDidMount() {
        restaurantApi.then((res) => {
            const restaurantList = res.map(item => <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>{item.site}</td>
                <td>{item.notes}</td>
            </tr>)
            this.setState({ restaurantList });
        })
    }

    render() {
        return (
            <>
                {this.state.restaurantList}
            </>
        )
    }
}

export default Colummns