import React from 'react'

import { shallow } from '../../__test__/setup'
import RestaurantList from './component'
import { IRestaurant } from '../../models/interface'
import Loading from './Loading'

describe('testing <RestaurantList> component', () => {
    const getRestaurant: () => void = jest.fn()

    it('render restaurant list while request is loading', () => {
        const wrapper = shallow<typeof RestaurantList>(<RestaurantList getRestaurant={getRestaurant} loading={true} />)
        expect(wrapper.is(Loading)).toBeTruthy();
    })

    it('render restaurant list while request success', () => {
        const fakeRestaurantList: Array<IRestaurant> = [{
            id: 'id',
            category: 'category',
            address: 'address',
            name: 'name',
            phone: 'phone',
            site: 'site',
            notes: 'notes'
        }]
        const wrapper = shallow<typeof RestaurantList>(<RestaurantList getRestaurant={getRestaurant} loading={false} restaurants={fakeRestaurantList} />)
        const matchRestaurantList: Array<IRestaurant> = []
        wrapper.find('tr').forEach((tdElement: any) => {
            const restaurantDetail: any = {}
            tdElement.find('td').getElements().forEach(((el: any) => {
                if (!restaurantDetail[el.props.children]) restaurantDetail[el.props.children] = el.props.children
            }))
            matchRestaurantList.push(restaurantDetail)
        })
        expect(matchRestaurantList).toEqual(fakeRestaurantList)
    })

})