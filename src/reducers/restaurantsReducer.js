import { FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_ERROR } from './actionType';

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
                fetchRestaurantError: true,
            };
        default:
            return state
    }
}

export default restaurantsReducer