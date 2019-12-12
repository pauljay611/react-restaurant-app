import { combineReducers } from "redux";
import { combineEpics } from 'redux-observable';
import restaurantsReducer from './restaurantsReducer';

export const rootEpic = combineEpics(
    fetchRestaurantEpic
);

export const rootReducer = combineReducers({
    restaurantsReducer
});