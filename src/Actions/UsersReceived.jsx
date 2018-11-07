import {USERS_RECEIVED} from "../Helpers/Constants";

export function UsersReceived(users) {
    return {
        type: USERS_RECEIVED,
        users: users
    }
}
