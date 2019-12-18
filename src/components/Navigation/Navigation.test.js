import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

// react router test
import { createMemoryHistory } from 'history'

import Navigation from './Navigation'

import { toBeInTheDocument } from '@testing-library/jest-dom';
// 從 jest-dom 擴充斷言方式
expect.extend({ toBeInTheDocument });

describe('<Navigation>', () => {
    // const history = createMemoryHistory()

    // it('renders navigation component', () => {
    //     // 每次測試後將 render 的 DOM 清空
    //     afterEach(cleanup);

    //     // 取得 dom 並 test 該 render content
    //     expect(getByText('Restaurant').textContent).toBe('Restaurant');
    //     expect(container.querySelector('h1').innerHTML).toBe('Restaurant');
    // })

    it('renders navigation router', () => {
        // get render Component
        const { container, getByText } = render(
            <MemoryRouter initialEntries={['/restaurant']}>
                <Navigation />
            </MemoryRouter>
        )
        // history.push('/admin')
        expect(container.innerHTML).toMatch('Restaurant')
        fireEvent.click(getByText(/admin/i))
        expect(container.innerHTML).toMatch('Admin')
    })
})