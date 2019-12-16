import React, { Component } from "react";
import PropTypes from 'prop-types';
import { IRestaurant } from '../../models/interface'

export interface RestaurantListProps {
    getRestaurant?: () => Function
    restaurants?: Array<IRestaurant>
}

class RestaurantList extends Component<RestaurantListProps, {}> {

    public componentDidMount() {
        this.props.getRestaurant();
    }

    public render() {
        const renderRestaurant = () => {
            return this.props.restaurants!.map(item => <tr key={item.id}>
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

export default RestaurantList;