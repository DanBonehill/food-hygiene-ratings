import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

import authoritiesReducer from '../reducers/authorities';
import hygieneScoresReducer from '../reducers/hygieneScores';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            authorities: authoritiesReducer,
            hygieneScores: hygieneScoresReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store
}