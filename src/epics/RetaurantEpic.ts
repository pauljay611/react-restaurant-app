import { from, of } from 'rxjs';
import { Epic, ofType } from 'redux-observable';
import { ActionType, isActionOf } from 'typesafe-actions';
import { switchMap, map, takeUntil, debounceTime, catchError } from 'rxjs/operators';

import { FETCH_RESTAURANT_DATA, SEARCH_RESTAURANT_DATA, CANCEL_SEARCH_RESTAURANT_DATA } from '../constants/index';
import * as actions from "../actions";
import { restaurantApi, searchRestaurantApi } from "../api/index";
import { RootState } from "../reducers";

type Action = ActionType<typeof actions>;

const getRestaurantEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        ofType(FETCH_RESTAURANT_DATA),
        switchMap(() => from(restaurantApi()).pipe(
            map(response => actions.fetchRestaurantSuccess(response)),
            catchError(error => of(actions.fetchRestaurantError(error)))
        )
        )
    )


const debounceTimeType: number = 1000

const searchRestaurantEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        ofType(SEARCH_RESTAURANT_DATA),
        debounceTime(debounceTimeType),
        switchMap((action: string) =>
            from(searchRestaurantApi(action.payload)).pipe(
                map(response => response.length > 0 ? actions.searchRestaurantSuccess(response) : actions.fetchRestaurantSuccess(response)),
                takeUntil(action$.ofType(CANCEL_SEARCH_RESTAURANT_DATA)),
                catchError(error => of(actions.searchRestaurantError(error)))
            )
        )
    )

export default [
    getRestaurantEpic,
    searchRestaurantEpic
];