import { FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_ERROR } from '../reducers/actionType';
import restaurantApi from '../api/index'

export function fetchRestaurantSuccess() {
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

const incrementIfOddEpic = (action$, state$) => action$.pipe(
    ofType(INCREMENT_IF_ODD),
    filter(() => state$.value.counter % 2 === 1),
    map(() => increment())
);