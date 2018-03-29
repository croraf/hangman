
import { createStore } from 'redux';

import reduxThunk from 'redux-thunk';

import { combineReducers, applyMiddleware, compose } from 'redux';

import { guessesReducer } from './guesses';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';


import createHistory from 'history/createHashHistory';

const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    guesses: guessesReducer,
});

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(reduxThunk, routerMiddleware(history))
    )
);

export {store, history};
