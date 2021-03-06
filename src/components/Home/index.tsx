import { ActionType } from 'typesafe-actions';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import * as actions from "../../actions";
import HomePage from './component'
import { RootState } from "../../reducers/index";

type Action = ActionType<typeof actions>;

interface OwnProps {
}

const mapStateToProps = (state: RootState) => {
    const restaurants = state.restaurantsReducer.restaurants;
    return {
        restaurants
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps) => bindActionCreators({
    findRestaurant: (keyword: string) => actions.searchRestaurant(keyword)
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)