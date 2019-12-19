import { ActionType, getType } from 'typesafe-actions';
import * as actions from "../actions/index";
import { IRestaurant } from '../models/interface'

type Action = ActionType<typeof actions>;

// RestaurantState interface
export interface IRestaurantState {
    restaurants?: Array<IRestaurant>
}

export const initialState: IRestaurantState = {
    restaurants: []
};

const restaurantsReducer = (state: IRestaurantState = initialState, action: Action): IRestaurantState => {
    switch (action.type) {
        case getType(actions.fetchRestaurantSuccess):
            return Object.assign({}, state, { restaurants: action.payload, });
        case getType(actions.fetchRestaurantError):
            return {
                ...state,
            };
        case getType(actions.searchRestaurantSuccess):
            return Object.assign({}, state, { restaurants: action.payload, });
        case getType(actions.searchRestaurantError):
            return {
                ...state,
            };
        default:
            return state
    }
}

export default restaurantsReducer