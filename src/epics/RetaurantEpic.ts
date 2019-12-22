import { from, of } from 'rxjs';
import { Epic, } from 'redux-observable';
import { ActionType, isActionOf } from 'typesafe-actions';
import { switchMap, filter, map, debounceTime, catchError } from 'rxjs/operators';

import * as actions from "../actions";
import { restaurantApi, searchRestaurantApi } from "../api/index";
import { RootState } from "../reducers";

type Action = ActionType<typeof actions>;

const getRestaurantEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.fetchRestaurant)),
        switchMap(() => from(restaurantApi()).pipe(
            map(response => actions.fetchRestaurantSuccess(response)),
            catchError(error => of(actions.fetchRestaurantError(error)))
        )
        )
    )


const searchRestaurantEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.searchRestaurant)),
        debounceTime(1000),
        switchMap((action) =>
            from(searchRestaurantApi(action.payload)).pipe(
                map(response => response.length > 0 ? actions.searchRestaurantSuccess(response) : actions.fetchRestaurantSuccess(response)),
                catchError(error => of(actions.searchRestaurantError(error)))
            )
        )
    )

export default [
    getRestaurantEpic,
    searchRestaurantEpic
];