import RestaurantList from "./component";
import { connect } from "react-redux";

const mapStateToProps = (state) => {

    const restaurants = state.restaurantReducer.restaurants ? state.restaurantReducer.restaurants : [];

    return {
        restaurants
    };

};

export default connect(mapStateToProps)(RestaurantList);