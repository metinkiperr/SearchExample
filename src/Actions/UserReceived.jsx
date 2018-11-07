import {USER_RECEIVED} from "../Helpers/Constants";

export function UserReceived(user) {
    return {
        type: USER_RECEIVED,
        user: user
    }
}
