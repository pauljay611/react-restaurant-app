import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Admin from './AdminPage'

describe('<Admin>', () => {
    it('renders without crashing', () => {
        // 每次測試後將 render 的 DOM 清空
        afterEach(cleanup);
        // render Component
        const { container, } = render(<Admin />);

        // 取得 dom 
        expect(container.querySelector('h1').innerHTML).toBe('AdminPage');
    });
})

