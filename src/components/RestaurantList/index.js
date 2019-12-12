import RestaurantList from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchRestaurant } from '../../actions/restaurantAction'

const mapStateToProps = (state) => {
    const restaurants = state.restaurantsReducer.restaurants;
    return {
        restaurants
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchRestaurant
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);