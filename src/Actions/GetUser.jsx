import {GET_USER} from "../Helpers/Constants";

export function GetUser(id) {
    return {
        type: GET_USER,
        id: id
    }
}
