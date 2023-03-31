import { merge } from "lodash";

import defaultState from "../defaultState";

function getHandlers(prevState, newState) {
  return {
    anihilate() {
      newState.count = 0;
      return newState;
    },

    //

    die({ amount }) {
      newState.count -= amount;
      return newState;
    },

    live({ amount }) {
      newState.count += amount;
      return newState;
    },

    //

    clear() {
      return defaultState.lives;
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
