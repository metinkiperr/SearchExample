import {connect} from "react-redux";
import Filter from "./Filter";
import {GetUsers} from "../../Actions/GetUsers";

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        filterUsers: (filterText) => {
            dispatch(
                GetUsers(filterText)
            );
        }
    }
};

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterContainer