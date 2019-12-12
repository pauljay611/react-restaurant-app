import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import * as constants from './constants'
import restaurantApi from '../api/index'
import { fetchRestaurantDataFullfilled } from './actions'

// epic takes an action stream
const restaurantEpic = action$ =>
    // this action stream is looking for action of type FETCH_RESTAURANT
    action$.ofType(constants.FETCH_RESTAURANT)
        // when it gets an action it creates new stream that it mergeMap/flatmaps into into itself
        .mergeMap(action =>
            Observable.fromPromise(restaurantApi)
                // the ajax call uses fetch hence has two promises in return one for header with another promise for body
                .mergeMap(response => (
                    // we flat map these two streams
                    Observable.fromPromise(payload => fetchRestaurantDataFullfilled(payload))
                    // and pass the content from the body and fire the action fetchFoodFullfilled
                )
                )
                // we care about the ajax stream until cancel action isn't fired
                // if we get a cancel action we stop listening to the stream
                .takeUntil(action$.ofType(constants.CANCEL_RESTAURANT))
                // finally if there are any errors fromajax we catch them
                // and fire an action of type FETCH_FOOD_FAILED
                .catch(error => Observable.of({ type: constants.FETCH_RESTAURANT_FAILED }))
        )

export default restaurantEpic