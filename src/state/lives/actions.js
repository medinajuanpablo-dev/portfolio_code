import { mapValues } from "lodash";

export const STATE_NAME = "Lives";

//prettier-ignore
export const TYPES = mapValues({ 
    
  ANIHILATE: 0,

  DIE: 0, LIVE: 0,

  CLEAR: 0, REPLACE: 0, MERGE: 0,

}, (v, k) => `${STATE_NAME.toUpperCase()}_${k}` );

/**@type {LivesActions} */
const ACTION_CREATORS = {
  anihilate: () => ({ type: TYPES.ANIHILATE }),

  die: (amount) => ({
    type: TYPES.DIE,
    params: { amount },
  }),
  live: (amount) => ({
    type: TYPES.LIVE,
    params: { amount },
  }),

  clear: () => ({ type: TYPES.CLEAR }),
  replace: (newState) => ({
    type: TYPES.REPLACE,
    params: { newState },
  }),
  merge: (partialState) => ({
    type: TYPES.MERGE,
    params: { partialState },
  }),
};

export default ACTION_CREATORS;

//Is not necessary nor useful to specify the actions outputs.

/**
 * @typedef {Object} LivesActions
 * @property {() => any} anihilate Kills everyone
 * @property {(amount: number) => any} die Kills the specified amount (of what?)
 * @property {(amount: number) => any} live Adds the specified amount of lives (of what?)
 *
 * @property {() => any} clear Resets this state.
 * @property {(newState: import("@state/defaultState").LivesState) => any} replace Completely replaces this state with the specified `newState`.
 * @property {(partialState: import("@state/defaultState").LivesState) => any} merge Deeply merges the specified `partialState` into the existing state.
 */
