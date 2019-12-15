import * as actions from '../constants/index';

export function fetchRestaurant(restaurant) {
    return {
        type: actions.FETCH_RESTAURANT_DATA,
        payload: restaurant
    }
}

export function fetchRestaurantSuccess(restaurants) {
    return {
        type: actions.FETCH_RESTAURANT_DATA_SUCCESS,
        restaurants
    };
};

export function fetchRestaurantError() {
    return {
        type: actions.FETCH_RESTAURANT_DATA_FAILED,
    };
};


export function searchRestaurant(keyword) {
    return {
        type: actions.SEARCH_RESTAURANT_DATA,
        payload: keyword
    }
}

export function searchRestaurantSuccess(restaurants) {
    return {
        type: actions.SEARCH_RESTAURANT_DATA_SUCCESS,
        restaurants
    };
};

export function searchRestaurantError() {
    return {
        type: actions.SEARCH_RESTAURANT_DATA_FAILED,
    };
};