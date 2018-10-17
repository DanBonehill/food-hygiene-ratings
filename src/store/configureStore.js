import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

import foodHygieneReducer from '../reducers/foodHygiene';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            foodHygiene: foodHygieneReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store
}
