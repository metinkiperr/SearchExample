import {GET_USERS} from "../Helpers/Constants";

export function GetUsers(filterText) {
    return {
        type: GET_USERS,
        filterText: filterText
    }
}
