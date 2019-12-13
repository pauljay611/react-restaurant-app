import { from, of } from 'rxjs';
import { switchMap, filter, map, catchError } from 'rxjs/operators';

import * as actions from "../actions";

import restaurantApi from "../api/index";

const restaurantGetEpic = (action$, store) => {
    return action$.pipe(
        filter(actions.fetchRestaurant),
        switchMap(action =>
            from(restaurantApi()).pipe(
                map(actions.fetchRestaurantSuccess),
                catchError(error => of(actions.fetchRestaurantError(error)))
            ),
        )
    );
}

export default [
    restaurantGetEpic,
];