import {connect} from "react-redux";
import {GetUsers} from "../../Actions/GetUsers";
import List from "./List";

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.UserReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(
                GetUsers()
            );
        }
    }
};

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default ListContainer