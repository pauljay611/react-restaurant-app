import * as constants from './constants'

const initialState = {
    pending: false,
    restaurants: []
};

const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.FETCH_RESTAURANT:
            return { preparing: true, restaurants: [] }
        case constants.FETCH_RESTAURANT_SUCCESS:
            return { ...state, preparing: false, restaurants: action.payload }
        case constants.CANCEL_RESTAURANT:
            return initialState
        case constants.FETCH_RESTAURANT_FAILED:
            return { ...state, preparing: false, foodItem: {} }
        default:
            return state
    }
}

export default restaurantsReducer