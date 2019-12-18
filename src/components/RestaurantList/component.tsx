import React, { Component } from "react";
import { IRestaurant } from '../../models/interface'

export interface RestaurantListProps {
    getRestaurant: () => void
    restaurants?: Array<IRestaurant>
}

class RestaurantList extends Component<RestaurantListProps, {}> {

    public componentDidMount() {
        this.props.getRestaurant();
    }

    public render() {
        if (this.props.restaurants) return (<></>)
        const renderRestaurant = (restaurants: Array<IRestaurant>) => {
            return restaurants!.map(item => <tr key={item.id}>
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
                {renderRestaurant(this.props.restaurants!)}
            </>
        )
    }
}

export default RestaurantList;