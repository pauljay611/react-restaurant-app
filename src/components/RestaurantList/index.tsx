import { ActionType } from 'typesafe-actions';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';

import * as actions from "../../actions";
import RestaurantList from "./component";
import { RootState } from "../../reducers/index";

type Action = ActionType<typeof actions>;

interface OwnProps {
}

const mapStateToProps = (state: RootState) => ({
    restaurants: state.restaurantsReducer.restaurants
})

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps) =>
    bindActionCreators({
        getRestaurant: () => actions.fetchRestaurant()
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);