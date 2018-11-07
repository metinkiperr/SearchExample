import {GET_USER, GET_USERS, USER_RECEIVED, USERS_RECEIVED} from "../Helpers/Constants";
import Api from "../Clients/Api";

const initialState = {
    users: [],
    user: {}
};

export default function UserReducer(state, action) {
    let client = new Api();

    switch (action.type) {
        case GET_USER:
            client.fetchUser(action.id);
            return Object.assign({}, initialState, state);
        case GET_USERS:
            client.fetchUsers(action.filterText);
            return Object.assign({}, initialState, state);
        case USERS_RECEIVED:
            return Object.assign({}, state, {users: action.users});
        case USER_RECEIVED:
            return Object.assign({}, state, {user: action.user});
        default:
            return Object.assign({}, initialState, state);
    }
}
