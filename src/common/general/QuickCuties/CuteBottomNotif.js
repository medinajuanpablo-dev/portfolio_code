import React from "react";

import usgMessagesList from "../Cuties/CuteMessagesList";

const displayMessage = usgMessagesList({ maxItems: 2, alignment: "right" });

/** A quick use of the MessagesList with a timer bar and for notifications only. Max 2 messages, easily customizable and
 * supports an `onUndo` callback to undo the notified action.
 * @param {Object} params
 * @param {"custom" | "light-change" | "serious-change" | "critical-change"} params.type The seriousness of the notification, which preset styles and life time. Use `custom` to enable customization by the `straightStyles`, `lifeTime` and `timerColor` props. Is `light-change` by default.
 * @param {any} params.Icon The message Icon.
 * @param {string} params.title The message title
 * @param {string} params.body The message body text.
 * @param {() => void} params.onUndo An 'undo' behavior callback. Specifying it will also display an 'Undo' button. If not, close-on-click will be enabled.
 * @param {number} params.lifeSeconds **ENABLED ONLY FOR `type="custom"`**. The life time of the notification, in seconds.
 * @param {string} params.timerColor **ENABLED ONLY FOR `type="custom"`**. Border Color style for the timer. Default is `border-slate-400`.
 * @param {import("../Cuties/CuteMessagesList").StylesObject} params.straightStyles **ENABLED ONLY FOR `type="custom"`**. An object containing directed (or not) styles for each element. Place the styles directly here without declaring a whole new Styles Object. _Remove props changing the same styles this changes_.
 */
function displayBottomNotif({
  type = "light-change",
  Icon,
  title,
  body,
  onUndo,
  lifeSeconds = 0,
  timerColor = "border-slate-400",
  straightStyles = {},
}) {
  const config = TYPES_CONFIGURATIONS[type];

  function undo(closeMessage) {
    if (onUndo) onUndo();
    closeMessage();
  }

  const customizableProps =
    type == "custom"
      ? {
          lifeTime: lifeSeconds * 1000,
          straightStyles,
          timerColor,
        }
      : config;

  displayMessage({
    ...config,
    Icon,
    title,
    body: (
      <Body
        body={body}
        timerColor={customizableProps.timerColor}
        lifeTime={customizableProps.lifeTime}
      />
    ),
    button: onUndo ? { text: "Undo", onClick: undo } : undefined,
    closeOnClick: !onUndo,
    straightStyles: customizableProps.straightStyles,
    lifeTime: customizableProps.lifeTime,
  });
}

function Body({ body, timerColor, lifeTime }) {
  return (
    <>
      <p className="mt-1 text-light text-slate-600 text-sm | lg:text-base">
        {body}
      </p>

      {timerColor && lifeTime ? <Timer {...{ lifeTime, timerColor }} /> : null}
    </>
  );
}

function Timer({ lifeTime, timerColor }) {
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setStart(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ transitionDuration: `${lifeTime - 10}ms` }}
      className={
        timerColor +
        " mt-2 border-1 w-full transition-all ease-linear" +
        (start ? " w-0" : "")
      }
    />
  );
}

//prettier-ignore
const TYPES_CONFIGURATIONS = {
  "light-change": {
    lifeTime: 5000,
    timerColor: "border-slate-500 border-opacity-60",
    fadeSpeed: "fast",
    straightStyles: {
      ct: "w-screen-11/12 | md:w-screen-7/12 | lg:w-screen-6/12",
      textCt: "w-full",
      button: "xs:px-3 xs:py-2 | lg:px-8",
    },
  },
  "serious-change": {
    lifeTime: 8000,
    timerColor: "border-amber-500 border-opacity-60",
    fadeSpeed: "default",
    straightStyles: {
      ct: "w-screen-11/12 text-amber-600 | md:w-screen-7/12 | lg:w-screen-6/12",
      icon: "text-amber-600",
      textCt: "w-full",
      button: "xs:px-3 xs:py-2 border-amber-600 hover:bg-amber-600 hover:text-slate-100 | lg:px-8",
    },
  },
  "critical-change": {
    lifeTime: 15000,
    timerColor: "border-red-500 border-opacity-60",
    fadeSpeed: "slow",
    straightStyles: {
      ct: "w-screen-11/12 text-red-500 | md:w-screen-7/12 | lg:w-screen-6/12",
      textCt: "w-full",
      icon: "text-red-500",
      button: "xs:px-3 xs:py-2 border-red-500 hover:bg-red-500 hover:text-slate-100 | lg:px-8",
    },
  },
  "custom": {
    timerColor: "text-slate-500",
    fadeSpeed: "default",
  },
};

export default displayBottomNotif;
