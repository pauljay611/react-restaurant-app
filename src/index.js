import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createEpicMiddleware } from 'redux-observable';

import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

/**
 * Redux store setup
 */
import { rootReducer } from "./reducers";
import epics from "./epics";


const epicMiddleware = createEpicMiddleware();

const composeEnhancers = (
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(epicMiddleware)
);

//create the redux store
const store = createStore(
    rootReducer,
    enhancer,
);

epicMiddleware.run(epics);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
