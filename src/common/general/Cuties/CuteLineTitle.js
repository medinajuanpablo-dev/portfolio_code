import React from "react";

import { useIndicatedStyles } from "@static/tailwind";
import { typeOf } from "@static/functions";

/**
 * A practical separator of sections with text in the middle.
 * @param {Object} props
 * @param {boolean} props.subtitle If true, the line will cover only 3/4 of the width instead of all of it.
 * @param {StylesObject} props.straightStyles An object containing directed styles for each element. Place the styles directly here without declaring a whole new Styles Object. _Remove props changing the same styles this changes_.
 */
function LineTitle({ children, subtitle, straightStyles }) {
  //prettier-ignore
  const getActiveStyles = useIndicatedStyles(INDICATORS, DIRECTED_STYLES, { customDirSty: straightStyles });

  //prettier-ignore
  const styles = getActiveStyles({ subtitle });

  return (
    <div className={styles.ct}>
      <div className={styles.line} />
      {typeOf(children, "string") ? (
        <p className={styles.text}>{children}</p>
      ) : (
        children
      )}
      <div className={styles.line} />
    </div>
  );
}

/**
 * @typedef {Object} StylesObject
 * @property {string} ct
 * @property {string} line
 * @property {string} text
 */
//prettier-ignore
const DIRECTED_STYLES = {
  ct: "flex items-center || st<w-3/4'mx-auto>",
  line: "flex-1 h-0 border-t-1 border-gray-500 || st<border-gray-300>",
  text: "flex-initial text-light text-gray-500 px-3 text-lg",
};

//prettier-ignore
const INDICATORS = [
  { key: "subtitle", directive: "st", condition: (p) => p.subtitle },
];

export default LineTitle;
