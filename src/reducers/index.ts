import { combineReducers } from "redux";
import restaurantsReducer, { IRestaurantState } from './restaurantsReducer';

// intergrate all state type
export type RootState = {
    restaurantsReducer: IRestaurantState
}

export const rootReducer = combineReducers({
    restaurantsReducer
});