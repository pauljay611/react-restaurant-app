import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

import Navigation from './index'

afterEach(cleanup)

describe('Testing <Navigation> component', () => {

    it('click navigation button', () => {
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