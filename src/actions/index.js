import { FETCH_RESTAURANT_DATA_SUCCESS, FETCH_RESTAURANT_DATA_FAILED, FETCH_RESTAURANT_DATA } from '../constants/index';


export function fetchRestaurantSuccess(restaurants) {
    return {
        type: FETCH_RESTAURANT_DATA_SUCCESS,
        restaurants
    };
};

export function fetchRestaurantError() {
    return {
        type: FETCH_RESTAURANT_DATA_FAILED,
    };
};

export const fetchRestaurant = restaurant => ({ type: FETCH_RESTAURANT_DATA, payload: restaurant });
// export const fetchRestaurant = function (restaurant) {
//     return {
//         type: FETCH_RESTAURANT_DATA,
//         payload: restaurant
//     }
// }