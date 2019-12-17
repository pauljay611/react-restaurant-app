// NOTE
// DO NOT USE dynamic string operations(like template string) as action type property.
// see more details: https://github.com/piotrwitek/typesafe-actions#--the-actions

export const FETCH_RESTAURANT_DATA = '@@FETCH_RESTAURANT_DATA'
export const FETCH_RESTAURANT_DATA_SUCCESS = '@@FETCH_RESTAURANT_DATA_SUCCESS'
export const CANCEL_FETCH_RESTAURANT_DATA = '@@CANCEL_FETCH_RESTAURANT_DATA'
export const FETCH_RESTAURANT_DATA_FAILED = '@@FETCH_RESTAURANT_DATA_FAILED'

export const SEARCH_RESTAURANT_DATA = '@@SEARCH_RESTAURANT_DATA'
export const SEARCH_RESTAURANT_DATA_SUCCESS = '@@SEARCH_RESTAURANT_DATA_SUCCESS'
export const CANCEL_SEARCH_RESTAURANT_DATA = '@@CANCEL_SEARCH_RESTAURANT_DATA'
export const SEARCH_RESTAURANT_DATA_FAILED = '@@SEARCH_RESTAURANT_DATA_FAILED'