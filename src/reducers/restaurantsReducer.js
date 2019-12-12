import { FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_ERROR } from './actionTypes';

const initialState = {
    restaurants: []
};

const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESTAURANT_SUCCESS:
            return {
                ...state,
                restaurants: action.restaurants,
            };
        case FETCH_RESTAURANT_ERROR:
            return {
                ...state,
                fetchRestaurantError: action.restaurants,
            };
        default:
            return state
    }
}

export default restaurantsReducer