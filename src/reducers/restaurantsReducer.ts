import * as actions from '../constants/index';
import { IRestaurant } from '../models/interface'

// RestaurantState interface
export interface IRestaurantState {
    readonly restaurants?: Array<IRestaurant>
}

const initialState = {
    restaurants: []
};

const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_RESTAURANT_DATA_SUCCESS:
            return {
                ...state,
                restaurants: action.restaurants,
            };
        case actions.FETCH_RESTAURANT_DATA_FAILED:
            return {
                ...state,
                fetchRestaurantError: true,
            };
        case actions.SEARCH_RESTAURANT_DATA_SUCCESS:
            return {
                ...state,
                restaurants: action.restaurants,
            };
        case actions.SEARCH_RESTAURANT_DATA_FAILED:
            return {
                ...state,
                searchRestaurantError: true,
            };
        default:
            return state
    }
}

export default restaurantsReducer