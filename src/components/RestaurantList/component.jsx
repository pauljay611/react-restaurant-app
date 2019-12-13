import React, { Component } from "react";
import PropTypes from 'prop-types';

const RestaurantList = ({ restaurants, fetchRestaurants }) => {
    console.log(restaurants)
    const renderRestaurant = () => {
        return restaurants.map(item => <tr key={item.id}>
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

RestaurantList.propTypes = {
    restaurants: PropTypes.array,
};

export default RestaurantList;