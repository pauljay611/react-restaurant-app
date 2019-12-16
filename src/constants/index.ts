// NOTE
// DO NOT USE dynamic string operations(like template string) as action type property.
// see more details: https://github.com/piotrwitek/typesafe-actions#--the-actions

export const FETCH_RESTAURANT_DATA = '@@restaurant/FETCH_RESTAURANT_DATA'
export const FETCH_RESTAURANT_DATA_SUCCESS = '@@restaurant/FETCH_RESTAURANT_DATA_SUCCESS'
export const CANCEL_FETCH_RESTAURANT_DATA = '@@restaurant/CANCEL_FETCH_RESTAURANT_DATA'
export const FETCH_RESTAURANT_DATA_FAILED = '@@restaurant/FETCH_RESTAURANT_DATA_FAILED'

export const SEARCH_RESTAURANT_DATA = '@@restaurant/SEARCH_RESTAURANT_DATA'
export const SEARCH_RESTAURANT_DATA_SUCCESS = '@@restaurant/SEARCH_RESTAURANT_DATA_SUCCESS'
export const CANCEL_SEARCH_RESTAURANT_DATA = '@@restaurant/CANCEL_SEARCH_RESTAURANT_DATA'
export const SEARCH_RESTAURANT_DATA_FAILED = '@@restaurant/SEARCH_RESTAURANT_DATA_FAILED'