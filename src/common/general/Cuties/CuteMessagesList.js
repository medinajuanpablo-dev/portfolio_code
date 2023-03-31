/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ReactDOM from "react-dom/client";
import { mapValues } from "lodash";

//prettier-ignore
import { typeOf } from "@static/functions";

import { useIndicatedStyles } from "@static/tailwind";

import CuteSlidingList from "./CuteSlidingList";

function CuteMessage({
  Icon,
  title,
  body,
  button,
  secondButton,
  lifeTime = 5000,
  fadeSpeed = "default",
  closeOnClick = false,
  straightStyles,
  extraIndicators,
  extraIndParams,
  //Non-API props.
  onClose,
}) {
  if (secondButton && !button)
    throw Error(
      "No sense for a secondButton without the original button (at CuteMessagesList)."
    );

  //prettier-ignore
  const getActiveStyles = useIndicatedStyles(INDICATORS, DIRECTED_STYLES, {
    extraIndicators,
    customDirSty: straightStyles,
  });

  const [showing, setShowing] = React.useState(false); //Only to allow it to fade in when mounting.
  const [off, setOff] = React.useState(false); //Only to allow it to fade out to the other side when unmounting.

  var { current: cv } = React.useRef({});

  function close() {
    setOff(true);
    cv.fadeCloserTimer = setTimeout(onClose, FADE_DURATION_BY_SPEED[fadeSpeed]);
  }

  React.useEffect(() => {
    setShowing(true);

    if (lifeTime) cv.lifeCloserTimer = setTimeout(close, lifeTime);

    return () => {
      if (cv.lifeCloserTimer) clearTimeout(cv.lifeCloserTimer);
      if (cv.fadeCloserTimer) clearTimeout(cv.fadeCloserTimer);
    };
  }, []);

  function onButtonClick(event) {
    if (button && button.onClick) button.onClick(close, event);
    else close(); //If no button action specified, closes the Alert.
  }

  function onSecondButtonClick(event) {
    if (secondButton && secondButton.onClick)
      secondButton.onClick(close, event);
    else close(); //If no second button action specified, closes the Alert.
  }

  function onMessageClick() {
    if (closeOnClick) close();
  }

  //prettier-ignore
  const styles = getActiveStyles({ showing, off, button, secondButton, fadeSpeed, closeOnClick, ...extraIndParams });

  return (
    <div className={styles.ct} onClick={onMessageClick}>
      {Icon && <Icon className={styles.icon} />}

      <div className={styles.textCt}>
        {typeOf(title, "string") ? (
          <p className={styles.title}>{title}</p>
        ) : (
          title
        )}
        {typeOf(body, "string") ? <p className={styles.body}>{body}</p> : body}
      </div>

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
    </div>
  );
}

//prettier-ignore
/**
 * @typedef {Object} StylesObject
 * @property {string} ct
 * @property {string} icon
 * @property {string} textCt
 * @property {string} title
 * @property {string} body
 * @property {string} buttonsCt
 * @property {string} button
 * @property {string} secondButton
 */
const DIRECTED_STYLES = {
  ct: "flex justify-start items-center text-gray-800 bg-gray-100 rounded-xl z-50 transform transition-all opacity-0 border-1 border-transparent my-1 px-4 py-3 translate-y-10 || off<opacity-0'-translate-y-10> ff<duration-100> df<duration-200> sf<duration-400> sh<opacity-100'translate-y-0> coc<hover:border-gray-300'hover:cursor-pointer>",

  icon: "flex-none text-gray-700 h-6 w-6",
  textCt: "text-left ml-3 || 1b,2b<w-2/3>",
  title: "text-sm",
  body: "mt-1 text-light text-xs",

  buttonsCt: "flex-1 flex flex-col items-end ml-4",
  button: "border-1 border-gray-700 rounded-lg hover:bg-gray-500 hover:text-gray-100 transition duration-100 text-xs py-1 px-2",
  secondButton: "mt-1 border-1 border-gray-700 rounded-lg hover:bg-gray-500 hover:text-gray-100 transition duration-100 text-xs py-1 px-2",
};

//prettier-ignore
const INDICATORS = [
  { key: "showing", directive: "sh", condition: p => p.showing },
  { key: "oneButton", directive: "1b", condition: p => p.button },
  { key: "twoButtons", directive: "2b", condition: p => p.secondButton },
  { key: "fastFade", directive: "ff", condition: p => p.fadeSpeed == "fast" },
  { key: "defaultFade", directive: "df", condition: p => p.fadeSpeed == "default" },
  { key: "slowFade", directive: "sf", condition: p => p.fadeSpeed == "slow" },
  { key: "off", directive: "off", condition: p => p.off }, 
  { key: "closeOnClick", directive: "coc", condition: p => p.closeOnClick },
];

/**Message's fade in-out duration in miliseconds */
const FADE_DURATION_BY_SPEED = { fast: 100, default: 200, slow: 400 };

function CuteMessagesList({ alignment, messagesConfig }) {
  //prettier-ignore
  const getActiveStyles = useIndicatedStyles(LIST_INDICATORS, LIST_DIRECTED_STYLES);

  const messages = mapValues(messagesConfig, (msg) => <CuteMessage {...msg} />);

  const styles = getActiveStyles({ alignment });

  return (
    <CuteSlidingList
      direction="reverse-vertical"
      customDirSty={{ ct: styles.listCt }}
      items={messages}
      offset={LIST_OFFSET}
    />
  );
}

const LIST_OFFSET = -20;

//prettier-ignore
const LIST_DIRECTED_STYLES = {
  listCt: "fixed justify-end items-center left-0 bottom-0 w-screen || al<left-4'items-start> ar<items-end'left-auto'right-4>",
};

//prettier-ignore
const LIST_INDICATORS = [
  { key: "align-left", directive: "al", condition: p => p.alignment == "left" },
  { key: "align-right", directive: "ar", condition: p => p.alignment == "right" },
];

/* ---------------- IMPERATIVE API ----------------- */

/**
 * Returns a function to imperatively and globaly display multiple `CuteMessages` without attaching them to any Component (they live until imperatively closed).
 * @param {Object} configuration
 * @param {number} configuration.maxItems Maximum number of messages that can be displayed in this list. Is `3` by default.
 * @param {"left" | "center" | "right"} configuration.alignment Alignment of the appearing messages along the screen width. Is `center` by default.
 * @returns The `displayCuteMessage` function.
 */
function usgMessagesList({ maxItems = 3, alignment = "center" } = {}) {
  const listDOMRoot = (() => {
    //Create and append listElement to body. Create and return ReactDOM root.
    var listElement = document.createElement("div");
    listElement.id = "messagesListElement";
    document.body.append(listElement);
    return ReactDOM.createRoot(listElement);
  })();

  var messages = {};
  var count = 0;

  //Renders the list into the listElement.
  function render() {
    const messagesConfig = mapValues(messages, (msg, mk) => ({
      key: mk,
      onClose: () => close(mk),
      ...msg,
    }));

    listDOMRoot.render(<CuteMessagesList {...{ messagesConfig, alignment }} />);
  }

  //Removes the specified message and re-renders.
  function close(messageKey) {
    if (messages[messageKey]) {
      delete messages[messageKey]; //Remove the specified message.
      render();
    }
  }

  /**
   * Adds a new `CuteMessage`.
   * @param {Object} props Configuration of the Message.
   * @param {React.Component} props.Icon An Icon component.
   * @param {string | JSX.Element} props.title The Message text title.
   * @param {string | JSX.Element} props.body The Message text body.
   * @param {NotificationButton} props.button The button parameters. By default, the text is "Accept" and it closes the Message.
   * @param {NotificationButton} props.secondButton The second button parameters. This button can't exist alone. By default, the text is "Cancel" and it closes the Message.
   * @param {number} props.lifeTime The amount of miliseconds until the Message is automatically closed. If `0`, the Message is never closed automatically. Is `5000` (5 seconds) by default.
   * @param {"fast" | "default" | "slow"} props.fadeSpeed Speed of the fade in and fade off animation.
   * @param {boolean} props.closeOnClick If `true`, the Message is closed when clicking on it (anywhere except buttons). Is `false` by default.
   * @param {Array<Indicator>} props.extraIndicators An array with extra Indicators.
   * @param {ConditionParams} props.extraIndParams An object with the parameters needed for the extra Indicators conditions.
   * @param {StylesObject} props.straightStyles An object containing directed styles for each element. Place the styles directly here without declaring a whole new Styles Object. _Remove props changing the same styles this changes_.
   */
  function displayCuteMessage(props) {
    //If maxed out the amount of messages, remove the first one.
    if (Object.keys(messages).length == maxItems)
      close(Object.keys(messages)[0]);

    //Add new message.
    const messageKey = `m${count}`;
    messages[messageKey] = { alignment, ...props };
    count++;

    //Render new message list (including the new message).
    render();
  }

  return displayCuteMessage;
}

export default usgMessagesList;

/**
 * @typedef {import("@static/tailwind/useIndicatedStyles").Indicator} Indicator
 * @typedef {import("@static/tailwind/useIndicatedStyles").ConditionParams} ConditionParams
 * */

/**
 * @typedef {Object} NotificationButton
 * @property {string} text The text to be displayed in the button.
 * @property {OnClickCallback} onClick Callback function to be called on click. If not specified, the button just closes the alert.
 * @property {any} otherProps More props/attributes to pass directly to the button element.
 *
 * @callback OnClickCallback
 * @param {() => void} closeMessage Function to close the currently displaying message.
 * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event The click event.
 */
