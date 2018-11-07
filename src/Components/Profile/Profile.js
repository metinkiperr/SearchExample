import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core"

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        props.getUser(props.match.params.id);

        this.state = {
            user: {}
        };
    }

    componentWillReceiveProps(newProps) {
        let state = this.state;
        state.user = newProps.user.user;
        this.setState(state);
    }

    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="card" style={{"width": "18rem"}}>
                <img className="card-img-top" src="https://randomuser.me/api/portraits/lego/5.jpg" alt="John" style={{"width": "40%" , "alignSelf" : "center"}}/>
                    <div className="card-body">
                    <h1 className="card-title">{this.state.user.name}</h1>
                    <p className="title">{this.state.user.username}</p>
                    <p className="card-text">{this.state.user.email}</p>
                    <p>
                        <Button><a href={`mailto:${this.state.user.email}`}>Send Mail</a></Button>
                        <Link to={`/`}><Button>Back to list</Button></Link>
                    </p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
