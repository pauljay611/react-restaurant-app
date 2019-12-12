import { FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_ERROR, FETCH_RESTAURANT } from '../reducers/actionType';
import restaurantApi from '../api/index'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

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

export function fetchRestaurant(restaurants) {

    return {
        type: FETCH_RESTAURANT,
        restaurants
    }

    return dispatch => {
        restaurantApi.then((res) => {
            dispatch(fetchRestaurantSuccess(res));
        }).catch(err => {
            dispatch(fetchRestaurantError(err));
        });
    }
}

const fetchRestaurantEpic = (action$, state$) => action$.pipe(
    ofType(INCREMENT_IF_ODD),
    filter(() => state$.value.counter % 2 === 1),
    map(() => increment())
);