import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import utilsReducer from "../reducer/utils.reducer";
import tweetsReducer from "../reducer/tweets.reducer";
import { watchTweets } from "../saga/saga";

export const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    utils: utilsReducer,
    tweets: tweetsReducer,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(watchTweets);

export default store;
