import React from "react";
import { IoWarningOutline, IoCheckmark } from "react-icons/io5";

import { CuteActionNotice } from "@common/index";
import { useCustomizableStyles } from "@static/react";

/**
 * An quick use of `CuteActionNotice` for validity action notices only.
 * @param {Object} props
 * @param {"error" | "fine"} props.type
 * @param {"left" | "right"} props.position The notification position relative to the button.
 * @param {"default" | "large" | "larger"} props.size The icon size.
 * @param {import("../Cuties/CuteActionNotice").StylesObject} props.straightStyles An object containing directed styles for each element. Place the styles directly here without declaring a whole new Styles Object. _Remove props changing the same styles this changes_.
 * @param {"hover" | "focus"} props.behavior When the message popup shows up and hides. Is `"focus"` by default.
 * - If `"focus"`, it will show up on focus and hide on blur.
 * - If `"hover"`, it will only show up on hover and hide on un-hover.
 */
function CuteValidityNotification({
  type,
  title,
  body,
  position = "right",
  size = "default",
  behavior = "focus",
  straightStyles,
}) {
  return (
    <CuteActionNotice
      {...NOTIFICATIONS_TYPES[type]}
      body={body || NOTIFICATIONS_TYPES[type].body}
      title={title || NOTIFICATIONS_TYPES[type].title}
      extraIndicators={INDICATORS}
      extraIndParams={{ type, size }}
      straightStyles={useCustomizableStyles(DIRECTED_STYLES, straightStyles)}
      position={position}
      behavior={behavior}
    />
  );
}

const NOTIFICATIONS_TYPES = {
  error: {
    ButtonIcon: IoWarningOutline,
    Icon: IoWarningOutline,
    title: "Error",
    body: "Something is wrong in this field",
  },
  fine: {
    ButtonIcon: IoCheckmark,
    Icon: IoCheckmark,
    title: "All Good",
    body: "There's no trouble with this field",
  },
};

const INDICATORS = [
  { key: "fine", directive: "fi", condition: (p) => p.type == "fine" },
  { key: "error", directive: "er", condition: (p) => p.type == "error" },
  { key: "large", directive: "lg", condition: (p) => p.size == "large" },
  { key: "larger", directive: "lgr", condition: (p) => p.size == "larger" },
];

const DIRECTED_STYLES = {
  buttonCt:
    "lg<w-7'h-7'xs:w-8'xs:h-8'-mr-1> lgr<w-9'h-9'xs:w-10'xs:h-10'-mr-2>",
  buttonIcon: "er<text-red-500> fi<text-green-500>",
  noticeIcon: "er<text-red-500> fi<text-green-500>",
  noticeCt:
    "er<border-red-500> fi<border-green-500> lg<bottom-12> lgr<bottom-14>",
  noticeTumor: "er<border-red-500> fi<border-green-500>",
};

export default CuteValidityNotification;
