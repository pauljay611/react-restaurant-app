import React from 'react';
import { shallow, mount } from '../../__test__/setup';

import Home from './component';

describe('testing <Home> component', () => {
    it('renders home component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.text().includes('HomePage')).toBeTruthy();
    });

    it('testing onchange with search restaurants methods', () => {
        const findRestaurant = jest.fn()
        const wrapper = shallow(<Home />);
        const event = {
            currentTarget: {
                value: 'This is just for test'
            }
        }
        wrapper.setProps({ findRestaurant: findRestaurant });
        wrapper.find('input').simulate('change', event)
        expect(findRestaurant).toHaveBeenCalledTimes(1);
    });

    // it('renders children when passed in', () => {
    //     const wrapper = shallow((
    //         <MyComponent>
    //             <div className="unique" />
    //         </MyComponent>
    //     ));
    //     expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    // });

    // it('simulates click events', () => {
    //     const onButtonClick = sinon.spy();
    //     const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    //     wrapper.find('button').simulate('click');
    //     expect(onButtonClick).to.have.property('callCount', 1);
    // });
});