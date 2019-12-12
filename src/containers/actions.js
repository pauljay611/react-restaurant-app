import * as constants from './constants'
/**
 * [fetchRestaurant A Redux action to fetch the restaurants data]
 * @return {Object}     [Returns an object with payload restaurants and type as FETCH_RESTAURANT]
 */
export function fetchRestaurant() {

    return {
        type: constants.FETCH_RESTAURANT,
        restaurants
    }
}
/**
 * [fetchRestaurant A Redux action that is automatically called when restaurants data is fetched]
 * @param  {String}  restaurants [Provide the choice of the food]
 * @return {Object}     [Returns an object with payload restaurants and type as FETCH_RESTAURANT_SUCCESS]
 */
export function fetchRestaurantDataFullfilled(restaurants) {
    return {
        type: constants.FETCH_RESTAURANT_SUCCESS,
        restaurants
    };
};
/**
 * [cancelFoodData A Redux action which can be called anytime during a running food request so as to cancel it]
 * @return {Object}     [returns object with type CANCEL_FOOD]
 */
export function cancelRestaurantData() {
    return {
        type: constants.CANCEL_RESTAURANT,
    };
};