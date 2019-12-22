import { ActionType, getType } from 'typesafe-actions';
import * as actions from "../actions/index";
import { IRestaurant } from '../models/interface'

type Action = ActionType<typeof actions>;

export interface IRestaurantState {
    restaurants?: Array<IRestaurant>
    loading: boolean
}

export const initialState: IRestaurantState = {
    restaurants: [],
    loading: false
};

const restaurantsReducer = (state: IRestaurantState = initialState, action: Action): IRestaurantState => {
    switch (action.type) {
        case getType(actions.fetchRestaurant):
            return Object.assign({}, state, { loading: true, });
        case getType(actions.fetchRestaurantSuccess):
            return Object.assign({}, state, { restaurants: action.payload, loading: false });
        case getType(actions.fetchRestaurantError):
            console.error(action.payload.message)
            return Object.assign({}, state);
        case getType(actions.searchRestaurant):
            return Object.assign({}, state, { loading: true, });
        case getType(actions.searchRestaurantSuccess):
            return Object.assign({}, state, { restaurants: action.payload, loading: false });
        case getType(actions.searchRestaurantError):
            console.error(action.payload.message)
            return Object.assign({}, state);
        default:
            return state
    }
}

export default restaurantsReducer