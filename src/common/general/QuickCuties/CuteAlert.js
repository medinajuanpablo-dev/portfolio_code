/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ReactDOM from "react-dom/client";

import { typeOf } from "@static/functions";
import { useCustomizableStyles } from "@static/react";

import CuteModal from "../Cuties/CuteModal";

function CuteAlert({
  Icon,
  iconPosition = "top",
  title,
  body,
  button,
  secondButton,
  onClose,
  straightStyles,
}) {
  if (secondButton && !button)
    throw Error(
      "No sense for a secondButton without the original button at Cute Alert."
    );

  const [visible, setVisible] = React.useState(false);

  const { current: cv } = React.useRef({ closeReason: null });

  React.useEffect(() => setVisible(true), [displayChain]); //Re-open when another Alert is displayed.

  function onModalClose(finished, reason) {
    if (!finished) setVisible(false);
    else if (onClose) {
      if (reason == "default") cv.closeReason = "default";
      onClose(cv.closeReason);
    }
  }

  function onButtonClick(event) {
    cv.closeReason = "button";

    if (button && button.onClick)
      button.onClick(() => setVisible(false), event);
    else setVisible(false); //If no button action specified, closes the Alert.
  }

  function onSecondButtonClick(event) {
    cv.closeReason = "secondButton";

    if (secondButton && secondButton.onClick)
      secondButton.onClick(() => setVisible(false), event);
    else setVisible(false); //If no second button action specified, closes the Alert.
  }

  const styles = useCustomizableStyles(STYLES, straightStyles);

  var renderingBody;
  if (typeOf(body, "string"))
    renderingBody = <p className={styles.body}>{body}</p>;
  else if (typeOf(body, "object") && body.Component)
    renderingBody = (
      <body.Component closeAlert={() => setVisible(false)} {...body} />
    );
  else renderingBody = body;

  return (
    <CuteModal visible={visible} onClose={onModalClose}>
      {iconPosition == "top" && Icon && <Icon className={styles.topIcon} />}
      {typeOf(title, "string") ? (
        <p className={styles.title}>
          {iconPosition == "left" && Icon && (
            <Icon className={styles.asideIcon} />
          )}{" "}
          {title}{" "}
          {iconPosition == "right" && Icon && (
            <Icon className={styles.asideIcon} />
          )}
        </p>
      ) : (
        title
      )}

      {renderingBody}

      <div className={styles.buttonsCt}>
        {button && (
          <button
            onClick={onButtonClick}
            className={styles.button}
            {...(button.otherProps || {})}
          >
            {button.text || "Accept"}
          </button>
        )}
        {secondButton && (
          <button
            onClick={onSecondButtonClick}
            className={styles.secondButton}
            {...(secondButton.otherProps || {})}
          >
            {secondButton.text || "Cancel"}
          </button>
        )}
      </div>
    </CuteModal>
  );
}

//prettier-ignore
/**
 * @typedef {Object} StylesObject
 * @property {string} topIcon Icon styles when `position="top"` (default case)
 * @property {string} asideIcon Icon styles when `position="left"` or `position="right"`
 * @property {string} title
 * @property {string} body
 * @property {string} buttonsCt
 * @property {string} button
 * @property {string} secondButton
 */
const STYLES = {
  topIcon: "mx-auto text-gray-700 h-10 w-10",
  asideIcon: "text-gray-700 h-8 w-8 mx-2",
  
  title: "flex justify-center items-center mt-4 text-xl text-slate-700",
  body: "text-center mt-6 mb-2 px-2 text-sm tracking-wide leading-relaxed text-light text-slate-600",

  buttonsCt: "text-center mt-6 text-slate-600",
  button: "border-1 border-slate-500 rounded-lg hover:bg-slate-500 hover:text-slate-100 transition duration-100 mx-2 py-2 px-4 text-sm",
  secondButton: "border-1 border-slate-500 rounded-lg hover:bg-slate-500 hover:text-slate-100 transition duration-100 mx-2 py-2 px-4 text-sm",
};

/* ---------------- IMPERATIVE API ----------------- */

const alertDOMRoot = (() => {
  var alertElement = document.createElement("div");
  alertElement.id = "alertElement";
  document.body.append(alertElement);
  return ReactDOM.createRoot(alertElement);
})();

var displayChain = 0;

/**
 * A Cute, imperative and customizable Alert made with `CuteModal` to quickly display something
 * easy and fast without losing customization.
 *
 * ### Custom Body.
 *
 * A custom body can be used. To be able to close de alert from inside of it, pass an object
 * containing a Component and it's props, allowing it to receive the `closeAlert` callback.
 *
 * ```
 * displayCuteAlert({
 *    Icon: SomeIcon,
 *    title: "Do something custom",
 *    body: { Component: MyComponent, ...someProps },
 * })
 * ```
 *
 * `MyComponent` will receive `closeModal` as a prop.
 *
 * @param {Object} props
 * @param {React.Component} props.Icon An Icon component.
 * @param {"top" | "left" | "right"} props.iconPosition If "top", the Icon will be bigger and placed above the title. If "left" or "right", it'll be smaller and at the specified side of the title.
 * @param {string | JSX.Element} props.title The Alert text title.
 * @param {string | {Component: React.Component, ...props: any} | JSX.Element} props.body The Alert text body.
 * @param {NotificationButton} props.button The button parameters. By default, the text is "Accept" and it closes the Alert.
 * @param {NotificationButton} props.secondButton The second button parameters. This button can't exist alone. By default, the text is "Cancel" and it closes the Alert.
 * @param {(reason: "default" | "button" | "secondButton") => void} props.onClose Callback to execute when the Alert is closed. It receives a param with the closing reason: by default behavior (clicking outside or pressing Escape), by the first button or by the second button.
 * @param {StylesObject} props.straightStyles An object containing directed (or not) styles for each element. Place the styles directly here without declaring a whole new Styles Object. _Remove props changing the same styles this changes_.
 */
function displayCuteAlert(props) {
  alertDOMRoot.render(<CuteAlert displayChain={displayChain++} {...props} />);
}

export default displayCuteAlert;

/**
 * @typedef {import("@static/tailwind/useIndicatedStyles").Indicator} Indicator
 * @typedef {import("@static/tailwind/useIndicatedStyles").ConditionParams} ConditionParams
 * */

/**
 * @typedef {Object} NotificationButton
 * @property {string} text The text to be displayed in the button.
 * @property {OnClickCallback} onClick Callback function to be called on click. Receives a `closeAlert` callback as param. If not specified, the button just closes the alert.
 * @property {any} otherProps More props/attributes to pass directly to the button element.
 *
 * @callback OnClickCallback
 * @param {() => void} closeAlert Function to close the currently displaying alert.
 * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event The click event.
 */
