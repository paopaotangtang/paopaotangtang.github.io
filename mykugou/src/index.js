import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./server/api";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import {createStore} from "redux";
import reducer from "./reducer/reducer";

let data={
    songlist:[],
    hash:""
}
let store = createStore(reducer,data);

ReactDOM.render(
            <Provider store = {store}>
                <Router>
                    <App />
                </Router>
            </Provider>
            , document.getElementById('root'));
registerServiceWorker();

