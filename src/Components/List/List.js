import React from 'react';
import {Link} from "react-router-dom";
import FilterContainer from "../Filter/FilterContainer";

export default class List extends React.Component {
    constructor(props) {
        super(props);

        props.getUsers();

        this.state = {
            users: []
        };
    }

    componentWillReceiveProps(newProps) {
        let state = this.state;
        state.users = newProps.users.users;
        this.setState(state);
    }

    render() {
        return (
            <div className="container">
                <FilterContainer />
                <ul className="list-group">
                    {this.state.users.map(x => (
                        <li className="list-group-item" key={x.id}>
                            <Link to={`/users/${x.id}`}>{x.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
