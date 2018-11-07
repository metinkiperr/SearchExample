import {connect} from "react-redux";
import {GetUser} from "../../Actions/GetUser";
import Profile from "./Profile";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.UserReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUser: (id) => {
            dispatch(
                GetUser(id)
            );
        }
    }
};

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);

export default ProfileContainer