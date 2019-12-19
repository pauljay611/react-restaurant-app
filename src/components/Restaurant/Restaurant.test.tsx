import React from 'react'
import { render, cleanup } from '@testing-library/react'

import RestaurantPage from './RestaurantPage'

afterEach(cleanup);

describe('Testing <Restaurant> component', () => {
    it('render restaurant component', () => {
        // render Component
        const { container, getByText } = render(<RestaurantPage />);

        // 取得 dom 並 test 該 render content
        expect(getByText('Restaurant').textContent).toBe('Restaurant');
        expect(container.querySelector('h1')!.innerHTML).toBe('Restaurant');
    });
})