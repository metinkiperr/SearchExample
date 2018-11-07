import React, {Component} from 'react';

import ListContainer from "./Components/List/ListContainer";
import {BrowserRouter,Route} from "react-router-dom";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import NavBar from './Components/Templates/NavBar';
import Grid from '@material-ui/core/Grid';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <div className="App">
            <NavBar/>
            <Grid container spacing={24} style={{padding: 24}}></Grid>
                <Route
                    exact
                    path="/"
                    component={ListContainer}/>
                <Route
                    exact
                    path="/users/:id"
                    component={ProfileContainer}/>
            </div>
            
            </BrowserRouter>
        );
    }
}

export default App;
