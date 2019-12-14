import { from, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { FETCH_RESTAURANT_DATA } from '../constants/index';
import * as actions from "../actions";

import { restaurantApi } from "../api/index";

const restaurantGetEpic = (action$, store) => {
    return action$.pipe(
        ofType(FETCH_RESTAURANT_DATA),
        switchMap((action) => {
            console.log(action)
            return from(restaurantApi(action.payload)).pipe(
                map(response => actions.fetchRestaurantSuccess(response)),
                catchError(error => of(actions.fetchRestaurantError(error)))
            )
        }
        )
    )
}
export default [
    restaurantGetEpic,
];