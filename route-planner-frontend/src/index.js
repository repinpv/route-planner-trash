import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './react/App';
import * as serviceWorker from './serviceWorker';
import {appReducer} from './redux/appReducer';
import {mapReducer} from './redux/mapReducer';
import {paramReducer} from './redux/paramReducer';
import {graphParamReducer} from "./redux/graphParamReducer";

const appliedMiddleware = applyMiddleware(thunkMiddleware);
const store = createStore(combineReducers({
    appState: appReducer,
    paramState: paramReducer,
    mapState: mapReducer,
    graphParamState: graphParamReducer,
}), appliedMiddleware);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
