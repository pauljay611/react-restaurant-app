import { FETCH_RESTAURANT_SUCCESS } from './actionTypes';

const initialState = {
    restaurants: []
};

const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESTAURANT_SUCCESS:
            return {
                ...state,
                restaurants: action.payload,
            };
        default:
            return state
    }
}

export default restaurantsReducer