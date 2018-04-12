
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';

export const appHistory = createHistory();

const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
    const store = createStore(
        combineReducers({
            ...rootReducer,
            routing: routerReducer,
        }),
        initialState,
        composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware(appHistory))),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./root-reducer', () => {
            const nextRootReducer = require('./root-reducer');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}