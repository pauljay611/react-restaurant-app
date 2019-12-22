import React from 'react';
import { shallow } from '../../__test__/setup';

import Home from './component';
import { Input } from './style'

describe('testing <Home> component', () => {
    const findRestaurant: (payload: string) => void = jest.fn()


    it('renders home component', () => {
        const wrapper = shallow<typeof Home>(<Home findRestaurant={findRestaurant} />);
        expect(wrapper.text().includes('HomePage')).toBeTruthy();
    });

    it('testing onchange with search restaurants methods', () => {
        const wrapper = shallow<typeof Home>(<Home findRestaurant={findRestaurant} />);
        const event = {
            currentTarget: {
                value: 'This is just for test'
            }
        }
        wrapper.setProps({ findRestaurant: findRestaurant });
        wrapper.find(Input).simulate('change', event)
        expect(findRestaurant).toHaveBeenCalledTimes(1);
    });

});