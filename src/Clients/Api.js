import {UsersReceived} from "../Actions/UsersReceived";
import {UserReceived} from "../Actions/UserReceived";
import store from "../store.jsx";

export default class Client {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/users';
    }

    fetchUsers = (query) => {
        const url = query ? `${this.baseUrl}?q=${query}` : this.baseUrl;
        return fetch(url)
            .then((res) => {
                res.json().then(function (users) {
                    store.dispatch(UsersReceived(users))
                });
            })
            .catch(console.log)
    };

    fetchUser = (id) => {
        const url = id ? `${this.baseUrl}/${id}` : this.baseUrl;
        return fetch(url)
            .then((res) => {
                res.json().then(function (user) {
                    store.dispatch(UserReceived(user))
                });
            })
            .catch(console.log)
    };
}
