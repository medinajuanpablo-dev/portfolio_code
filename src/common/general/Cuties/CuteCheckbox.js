/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { FiCheck } from "react-icons/fi";

import { useIndicatedStyles } from "@static/tailwind";

/**
 * @param {Object} props
 * @param {boolean} props.checked Turns this into a Controlled Component by forcing the checked state of the Checkbox.
 * @param {(isChecked: boolean) => void} props.onChange Callback to be executed on check change. This doesn't execute on external changes through the `checked` prop.
 * @param {string} props.label The text aside the checkbox.
 * @param {"left" | "right"} props.labelPosition The position of the label relative to the check-box. Is `"right"` by default.
 * @param {StylesObject} props.straightStyles An object containing directed styles for each element. Place the styles directly here without declaring a whole new Styles Object. _Remove props changing the same styles this changes_.
 */
function CuteCheckbox({
  checked: ctrlChecked,
  onChange,
  labelPosition = "right",
  label,
  straightStyles,
}) {
  //prettier-ignore
  const getActiveStyles = useIndicatedStyles(INDICATORS, DIRECTED_STYLES, { customDirSty: straightStyles });

  const [hovered, setHovered] = React.useState(false);
  const [localChecked, setLocalChecked] = React.useState(false);

  const isControlled = ctrlChecked !== undefined;
  const checked = isControlled ? ctrlChecked : localChecked;

  function setChecked(newValue) {
    if (!isControlled) setLocalChecked(newValue);
    if (onChange) onChange(newValue);
  }

  //prettier-ignore
  const styles = getActiveStyles({ checked, hovered });

  return (
    <div
      onClick={(e) => setChecked(!checked, e)}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      className={styles.ct}
    >
      {labelPosition === "left" && !!label && (
        <p className={styles.label}>{label}</p>
      )}
      <div className={styles.box}>
        <FiCheck className={styles.check} />
      </div>
      {labelPosition === "right" && !!label && (
        <p className={styles.label}>{label}</p>
      )}
    </div>
  );
}

//prettier-ignore
/**
 * @typedef {Object} StylesObject
 * @property {string} ct
 * @property {string} label
 * @property {string} check
 * @property {string} box
 */
const DIRECTED_STYLES = {
  ct: "flex items-center cursor-pointer justify-center",
  label: "mx-2 text-gray-700 select-none leading-none transition-color duration-200 pt-px || ho<text-blue-400>",
  check: "w-full h-full opacity-0 stroke-2 transition-opacity duration-200 || ch<opacity-100>",
  box: "rounded-sm border-1 border-gray-600 w-5 h-5 transition-color duration-200 || ho<border-blue-400>",
};

//prettier-ignore
const INDICATORS = [
  { key: "hovered", directive: "ho", condition: (p) => p.hovered },
  { key: "checked", directive: "ch", condition: (p) => p.checked },
];

/**
 * @typedef {import("@static/tailwind/useIndicatedStyles").Indicator} Indicator
 * @typedef {import("@static/tailwind/useIndicatedStyles").ConditionParams} ConditionParams
 * */

export default CuteCheckbox;
