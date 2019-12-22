import React, { Component } from "react";
import RestaurantList from '../RestaurantList/index'
import { H1 } from '../Style/Typography'
import { Input, Table } from './style'

export interface HomePageProps {
    findRestaurant: (payload: string) => void
}


class HomePage extends Component<HomePageProps> {
    constructor(props: HomePageProps) {
        super(props)
        this.searchRestaurants = this.searchRestaurants.bind(this)
    }


    searchRestaurants(e: React.FormEvent<HTMLInputElement>): void {
        let target = e.currentTarget;
        this.props.findRestaurant(target.value)
    }

    render() {
        return (
            <div>
                <H1>HomePage</H1>
                <Input data-testid="searchRestaurants" className="searchInput" type="text" placeholder="查詢餐廳" onChange={this.searchRestaurants} />
                <Table>
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