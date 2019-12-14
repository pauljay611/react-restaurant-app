import React, { Component } from "react";
import PropTypes from 'prop-types';

class RestaurantList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRestaurant('12345');
    }

    render() {
        const renderRestaurant = () => {
            console.log(this.props)
            return this.props.restaurants.map(item => <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>{item.site}</td>
                <td>{item.notes}</td>
            </tr>)
        }
        return (
            <>
                {renderRestaurant()}
            </>
        )
    }
}


RestaurantList.propTypes = {
    restaurants: PropTypes.array,
};

export default RestaurantList;