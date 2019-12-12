import { FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_ERROR } from './actionTypes';
import restaurantApi from '../api/index'

export function fetchRestaurantSuccess(restaurants) {
    return {
        type: FETCH_RESTAURANT_SUCCESS,
        restaurants
    };
};

export function fetchRestaurantError() {
    return {
        type: FETCH_RESTAURANT_ERROR,
    };
};

export function fetchRestaurant() {
    return dispatch => {

        restaurantApi.then((res) => {
            dispatch(fetchRestaurantSuccess(res));
        }).catch(err => {
            dispatch(fetchRestaurantError(err));
        });
    }
}