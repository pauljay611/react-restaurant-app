import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

import Navigation from './index'

describe('<Navigation>', () => {

    it('renders navigation router', () => {
        // get render Component
        const { container, getByText } = render(
            <MemoryRouter initialEntries={['/restaurant']}>
                <Navigation />
            </MemoryRouter>
        )

        expect(container.innerHTML).toMatch('Restaurant')

        // click button to checkout admin page
        fireEvent.click(getByText(/admin/i))
        expect(container.innerHTML).toMatch('Admin')
    })
})