import { from, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, takeUntil, debounceTime, catchError } from 'rxjs/operators';
import { FETCH_RESTAURANT_DATA, SEARCH_RESTAURANT_DATA, CANCEL_SEARCH_RESTAURANT_DATA } from '../constants/index';
import * as actions from "../actions";

import { restaurantApi, searchRestaurantApi } from "../api/index";

const getRestaurantEpic = (action$, store) => {
    return action$.pipe(
        ofType(FETCH_RESTAURANT_DATA),
        switchMap((action) => {
            return from(restaurantApi(action.payload)).pipe(
                map(response => actions.fetchRestaurantSuccess(response)),
                catchError(error => of(actions.fetchRestaurantError(error)))
            )
        }
        )
    )
}

const searchRestaurantEpic = (action$, store) => {
    return action$.pipe(
        ofType(SEARCH_RESTAURANT_DATA),
        debounceTime(1000),
        switchMap((action) => {
            return from(searchRestaurantApi(action.payload)).pipe(
                map(response => response.length > 0 ? actions.searchRestaurantSuccess(response) : actions.fetchRestaurantSuccess(response)),
                takeUntil(action$.ofType(CANCEL_SEARCH_RESTAURANT_DATA)),
                catchError(error => of(actions.searchRestaurantError(error)))
            )
        }
        )
    )
}

export default [
    getRestaurantEpic,
    searchRestaurantEpic
];