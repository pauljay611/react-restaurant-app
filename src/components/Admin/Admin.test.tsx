import React from "react";
import { render, cleanup } from '@testing-library/react'

import Admin from './AdminPage'

afterEach(cleanup)

describe('Testing <Admin> component', () => {
    it('renders admin component', () => {
        // render Component
        const { container, } = render(<Admin />);

        // 取得 dom 
        expect(container.querySelector('h1')!.innerHTML).toBe('AdminPage');
    });
})

