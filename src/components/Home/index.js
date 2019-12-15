import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchRestaurant } from '../../actions/index'
import HomePage from './component'

const mapStateToProps = (state) => {
    const restaurants = state.restaurantsReducer.restaurants;
    return {
        restaurants
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        findRestaurant: (payload) => searchRestaurant(payload)
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)