import React, { Component } from "react";
import { IRestaurant } from '../../models/interface'
import Loading from './Loading'

export interface RestaurantListProps {
    getRestaurant: () => void
    restaurants?: Array<IRestaurant>
    loading: boolean
}

class RestaurantList extends Component<RestaurantListProps, {}> {

    public componentDidMount() {
        this.props.getRestaurant();
    }

    public render() {
        const colNumber: number = 7
        if (this.props.loading) {
            return (<Loading colNumber={colNumber} />)
        }
        const renderRestaurant = (restaurants: Array<IRestaurant>) => {
            return restaurants!.map(item => <tr data-testid="getRestaurants" key={item.id}>
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