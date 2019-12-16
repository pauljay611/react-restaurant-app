import { createAction } from "typesafe-actions";
import { IRestaurant } from '../../models/interface'
import * as actions from '../constants/index';

export const fetchRestaurant = createAction(actions.FETCH_RESTAURANT_DATA, resolve => () => resolve())

export const fetchRestaurantSuccess = createAction(actions.FETCH_RESTAURANT_DATA_SUCCESS, resolve => (restaurants: Array<IRestaurant>) => resolve(restaurants))

export const fetchRestaurantError = createAction(actions.FETCH_RESTAURANT_DATA_FAILED, resolve => (error: Error) => resolve(error))

export const searchRestaurant = createAction(actions.SEARCH_RESTAURANT_DATA, resolve => (keyword: string) => resolve(keyword))

export const searchRestaurantSuccess = createAction(actions.SEARCH_RESTAURANT_DATA_SUCCESS, resolve => (restaurants: string) => resolve(restaurants))

export const searchRestaurantError = createAction(actions.SEARCH_RESTAURANT_DATA_FAILED, resolve => (error: Error) => resolve(error))