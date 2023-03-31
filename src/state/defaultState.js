import { isEmpty } from "lodash";

import { MONEY_STATE as MSK } from "@static/values/keys";
import { LOCAL_STORAGE } from "@static/values/general";
import { exists } from "@static/functions";

/**Error thrown when some actions were defined but not handled by the reducer.
 * @param {string} stateName @param {string} type */
export function unhandledActionError(stateName, type) {
  throw Error(
    (stateName || "A state") +
      " contains actions types it's reducer is not handling. Unhandled type: " +
      (type || "--Pass action type to error throwing--")
  );
}

// ==== State's structure and default values ====

/**
 * @typedef GeneralState
 * @property {MoneyState} money The amount of money and the state of the account.
 * @property {LivesState} lives The amount of lives
 *
 * @typedef MoneyState
 * @property {number} current
 * @property {string} state
 *
 * @typedef LivesState
 * @property {number} lives
 */

/**@type {GeneralState} */
const DEFAULT_GENERAL_STATE = {
  money: {
    current: 0,
    state: MSK.FREE_USE,
  },
  lives: {
    count: 0,
  },
};

export default (() => {
  // Here do changes and processes on the default state before exporting.

  // Load general state from localStorage if it's there and is enabled. Otherwise, load the default general state.
  if (!LOCAL_STORAGE.ENABLED) return DEFAULT_GENERAL_STATE;

  const savedGS = JSON.parse(localStorage.getItem(LOCAL_STORAGE.NAME));

  /**@type {GeneralState} */
  var initialState;
  if (exists(savedGS) && !isEmpty(savedGS)) initialState = savedGS;
  else initialState = DEFAULT_GENERAL_STATE;

  return initialState;
})();
