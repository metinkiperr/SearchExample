import React from 'react';
import {render} from 'react-dom'
import App from './App';
import {Provider} from "react-redux";
import {HashRouter} from 'react-router-dom'
import store from "./store.jsx";

render((
    <Provider store={store}>
        <HashRouter>
            <div>
                <App/>
            </div>
        </HashRouter>
    </Provider>
), document.getElementById('root'));
