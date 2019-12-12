import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRestaurant, cancelRestaurantData } from './actions'

class RestaurantList extends Component {

    constructor() {
        super()
        this.state = { restaurantList: [] };
    }

    componentDidMount() {
        // when ever a food search conatiner is loaded
        // check if previous food request is running
        if (this.props.restaurants.pending) {
            // if it is still running, then cancel the previous food request
            this.props.cancelRestaurantData()
        }
        this.props.fetchRestaurant()
        const restaurantList = this.props.restaurants.map(item => <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.address}</td>
            <td>{item.phone}</td>
            <td>{item.site}</td>
            <td>{item.notes}</td>
        </tr>)
        this.setState({ restaurantList });
    }

    render() {
        return (
            <>
                {this.state.restaurantList}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchRestaurant, cancelRestaurantData }, dispatch)
}

const mapStateToProps = ({ restaurants }) => {
    return { restaurants }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)