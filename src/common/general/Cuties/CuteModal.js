/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { checkOptionalValues, exists } from "@static/functions";
import { useIndicatedStyles } from "@static/tailwind";

/**
 * Displays a cute, fixed and screen-centered container with a background dim and default customizable behavior.
 *
 * ### CONSIDERATIONS 
 * 
 * _Check the Example. This considerations are well shown there_.
 *
 * **Must be controlled**: This Component is designed to be controlled, so the `visible` and `onClose` props must be specified. Otherwise it would be confusing and limited.
 *
 * **Separate `visible` controller state.**: Don't use the same values that are being displayed within the Modal to control the `visible` status;
 * this will cause the modal to crash or render nothing while closing (which is ugly). Use a separated `visible` state and keep the data as another state or ref.
 *
 * @param {Object} props
 * @param {boolean} props.visible **REQUIRED**. Controls the Modal's visibility.
 * @param {(finished: boolean, reason: "default" | "external") => void} props.onClose **REQUIRED**. Callback to execute when the Modal closing animation starts and finishes. Receives a `finished` boolean param and a 2nd `reason` param with the reason of the close. This callback should update the `visible` state on the parent Component.
 * @param {boolean} props.closeOnEscapeOrBlur If `true`, the Modal will close when Escape is pressed or clicking outside of it. Is `true` by default.
 * @param {"fast" | "default" | "slow"} props.fadeSpeed Speed of the fade in and fade off animation.
 * @param {Array<Indicator>} props.extraIndicators An array with extra Indicators.
 * @param {ConditionParams} props.extraIndParams An object with the parameters needed for the extra Indicators conditions.
 * @param {StylesObject} props.straightStyles An object containing directed styles for each element. Place the styles directly here without declaring a whole new Styles Object. _Remove props changing the same styles this changes_.
 */
function CuteModal({
  visible: ctrlVisible,
  onClose,
  closeOnEscapeOrBlur = true,
  fadeSpeed = "default",
  straightStyles,
  extraIndicators,
  extraIndParams,
  children,
}) {
  if (!exists(ctrlVisible) || !exists(onClose))
    throw Error(
      "This Component is designed to be controlled, so the 'visible' and 'onClose' props must be specified."
    );

  //prettier-ignore
  const getActiveStyles = useIndicatedStyles(INDICATORS, DIRECTED_STYLES, { extraIndicators, customDirSty: straightStyles });

  const [visible, setVisible] = React.useState(false);
  const [mountedChildren, setMountedChildren] = React.useState(false); //This allows the content to re-mount between openings, allowing it to update it's state to the new props.

  function open() {
    setVisible(true);
    setMountedChildren(true);
  }

  function close(reason) {
    return new Promise((resolve) => {
      setVisible(false);
      onClose(false, reason);

      setTimeout(() => {
        onClose(true, reason);
        setMountedChildren(false);
        resolve();
      }, FADE_DURATION_BY_SPEED[fadeSpeed]);
    });
  }

  React.useEffect(() => {
    if (ctrlVisible != undefined && ctrlVisible != visible) {
      if (!ctrlVisible) close("external");
      else open();
    }
  }, [ctrlVisible]);

  React.useEffect(() => {
    if (closeOnEscapeOrBlur) {
      const escapePressed = (e) => e.key == "Escape" && close("default");

      window.addEventListener("keydown", escapePressed);

      return () => window.removeEventListener("keydown", escapePressed);
    }
  }, [closeOnEscapeOrBlur]);

  //prettier-ignore
  const styles = getActiveStyles({ showing: visible, fadeSpeed, ...extraIndParams });

  return (
    <>
      <div className={styles.ct}>{mountedChildren && children}</div>

      <div
        className={styles.dim}
        onClick={() => closeOnEscapeOrBlur && close("default")}
      />
    </>
  );
}

//prettier-ignore
/**
 * @typedef {Object} StylesObject
 * @property {string} ct 
 * @property {string} dim
 */
const DIRECTED_STYLES = {
  ct: "flex flex-col fixed left-1/2 top-1/2 w-11/12 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 bg-gray-100 rounded-xl z-500 transition-all scale-0 opacity-0 p-4 || ff<duration-200> df<duration-300> sf<duration-500> sh<opacity-100'scale-100>",
  dim: "fixed top-0 left-0 h-screen w-screen bg-gray-700 bg-opacity-50 z-490 transition-opacity transform scale-0 opacity-0 || ff<duration-200> df<duration-300> sf<duration-500> sh<opacity-100'scale-100>"
};

//prettier-ignore
const INDICATORS = [
  { key: "showing", directive: "sh", condition: p => p.showing }, 
  { key: "fastFade", directive: "ff", condition: p => p.fadeSpeed == "fast" },
  { key: "defaultFade", directive: "df", condition: p => p.fadeSpeed == "default" },
  { key: "slowFade", directive: "sf", condition: p => p.fadeSpeed == "slow" },
];

/**Alert's fade in-out duration in miliseconds */
const FADE_DURATION_BY_SPEED = { fast: 200, default: 300, slow: 500 };

/**
 * @typedef {import("@static/tailwind/useIndicatedStyles").Indicator} Indicator
 * @typedef {import("@static/tailwind/useIndicatedStyles").ConditionParams} ConditionParams
 * */

export default CuteModal;
