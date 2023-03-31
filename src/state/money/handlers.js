import { merge } from "lodash";

import { MONEY_STATE as MNK } from "@static/values/keys";

import defaultState from "../defaultState";

function getHandlers(prevState, newState) {
  return {
    emptyMoney() {
      newState.current = 0;
      return newState;
    },

    freeze() {
      newState.state = MNK.FROZEN;
      return newState;
    },

    watch() {
      newState.state = MNK.WATCHED;
      return newState;
    },

    activate() {
      newState.state = MNK.FREE_USE;
      return newState;
    },

    //

    deposit({ amount }) {
      newState.current += amount;
      return newState;
    },

    withdraw({ amount }) {
      newState.current -= amount;
      return newState;
    },

    //

    clear() {
      return defaultState.money;
    },

    replace({ newState: specifiedNewState }) {
      return specifiedNewState;
    },

    merge({ partialState }) {
      return merge(newState, partialState);
    },
  };
}

export default getHandlers;
