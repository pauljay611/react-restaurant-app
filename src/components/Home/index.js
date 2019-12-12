import HomePage from './HomePage'
import { connect } from "react-redux"

const mapStateToProps = (state) => {

    return {
        restaurants: state.restaurantsReducer.restaurants
    }
}


export default connect(mapStateToProps)(HomePage)