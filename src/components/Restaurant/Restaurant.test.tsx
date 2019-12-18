import React from 'react'
import { render, cleanup } from '@testing-library/react'

import RestaurantPage from './RestaurantPage'

describe('<Admin>', () => {
    it('renders restaurant component', () => {
        // 每次測試後將 render 的 DOM 清空
        afterEach(cleanup);
        // render Component
        const { container, getByText } = render(<RestaurantPage />);

        // 取得 dom 並 test 該 render content
        expect(getByText('Restaurant').textContent).toBe('Restaurant');
        expect(container.querySelector('h1')!.innerHTML).toBe('Restaurant');
    });
})