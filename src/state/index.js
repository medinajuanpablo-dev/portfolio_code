import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

import { LOCAL_STORAGE } from "@static/values/general";

import defaultState from "./defaultState";

import moneyReducer from "./money/reducer";
import livesReducer from "./lives/reducer";

const combinedReducers = combineReducers({
  money: moneyReducer,
  lives: livesReducer,
});

function rootReducer(previousState, action) {
  const newState = combinedReducers(previousState, action);

  //Save the state into the localStorage on every action, if enabled.
  if (LOCAL_STORAGE.ENABLED)
    localStorage.setItem(LOCAL_STORAGE.NAME, JSON.stringify(newState));

  return newState;
}

export const createComposedStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    defaultState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
};
