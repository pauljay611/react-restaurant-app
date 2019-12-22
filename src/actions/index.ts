import { createAction } from "typesafe-actions";
import { IRestaurant } from '../models/interface'
import {
    FETCH_RESTAURANT_DATA,
    FETCH_RESTAURANT_DATA_SUCCESS,
    FETCH_RESTAURANT_DATA_FAILED,
    SEARCH_RESTAURANT_DATA,
    SEARCH_RESTAURANT_DATA_SUCCESS,
    SEARCH_RESTAURANT_DATA_FAILED
} from "../constants";

export const fetchRestaurant = createAction(FETCH_RESTAURANT_DATA, resolve => () => resolve())

export const fetchRestaurantSuccess = createAction(FETCH_RESTAURANT_DATA_SUCCESS, resolve => (restaurants: Array<IRestaurant>) => resolve(restaurants))

export const fetchRestaurantError = createAction(FETCH_RESTAURANT_DATA_FAILED, resolve => (error: Error) => resolve(error))

export const searchRestaurant = createAction(SEARCH_RESTAURANT_DATA, resolve => (keyword: string) => resolve(keyword))

export const searchRestaurantSuccess = createAction(SEARCH_RESTAURANT_DATA_SUCCESS, resolve => (keyword: string) => resolve(keyword))

export const searchRestaurantError = createAction(SEARCH_RESTAURANT_DATA_FAILED, resolve => (error: Error) => resolve(error))