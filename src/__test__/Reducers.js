import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RestaurantList from '../components/RestaurantList/index'
import Home from '../components/Home/index'
import * as Api from "../api/index";
import { rootReducer } from '../reducers/index'

function renderWithRedux(component, { initialState, store = createStore(rootReducer, initialState) } = {}) {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store
    }
}

afterEach(cleanup);

jest.mock("../api/index");

describe('Testing restaurant reducers', () => {

    const spyFn = jest.spyOn(Api, 'restaurantApi')

    it('render with get restaurant action', async () => {
        const { getByTestId } = renderWithRedux(
            <RestaurantList />,
        )
        await waitForElement(() => getByTestId('getRestaurants'))
        expect(spyFn).toHaveBeenCalledTimes(1);
        expect(spyFn).toHaveBeenCalledWith();
    })

    it('render with search restaurant action', async () => {
        const searchRestaurants = jest.fn()
        const { getByTestId } = renderWithRedux(
            <input data-testid="searchRestaurants" type="text" placeholder="查詢餐廳" onChange={searchRestaurants} />,
        )
        await fireEvent.change(getByTestId('searchRestaurants'))
        expect(searchRestaurants).toHaveBeenCalled()
    })

})