import { FETCH_RESTAURANT_DATA_SUCCESS, FETCH_RESTAURANT_DATA_FAILED, SEARCH_RESTAURANT_DATA_SUCCESS, SEARCH_RESTAURANT_DATA_FAILED } from '../constants/index';

const initialState = {
    restaurants: []
};

const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESTAURANT_DATA_SUCCESS:
            return {
                ...state,
                restaurants: action.restaurants,
            };
        case FETCH_RESTAURANT_DATA_FAILED:
            return {
                ...state,
                fetchRestaurantError: true,
            };
        case SEARCH_RESTAURANT_DATA_SUCCESS:
            return {
                ...state,
                restaurants: action.restaurants,
            };
        case SEARCH_RESTAURANT_DATA_FAILED:
            return {
                ...state,
                searchRestaurantError: true,
            };
        default:
            return state
    }
}

export default restaurantsReducer