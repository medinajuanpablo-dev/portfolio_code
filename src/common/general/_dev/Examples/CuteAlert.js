import React from "react";

import { displayCuteAlert } from "@common/index";
import { ImFire } from "react-icons/im";
import { IoBandageSharp } from "react-icons/io5";

function CuteAlertExample() {
  function onHotClick() {
    displayCuteAlert({
      title: "You burned your finger!",
      // body: "Labore dolor quis Lorem consectetur ullamco et sint adipisicing fugiat quis dolor proident. Laborum ad et in in duis aute. Occaecat ad veniam ut do nulla incididunt. Excepteur irure in nostrud mollit exercitation irure sunt aliquip sunt. Cillum ex laborum proident pariatur aliquip id pariatur sit.",
      Icon: ImFire,
      straightStyles: {
        topIcon: "text-red-500",
        secondButton: "bg-red-500 border-none text-gray-100 hover:bg-red-700",
      },
      button: { text: "Help!" },
      secondButton: { text: "That's fine" },
      onClose: (reason) => {
        if (reason == "button") {
          displayCuteAlert({
            title: "Healed!",
            body: "Proident nulla ad aliqua nisi et ad est labore culpa fugiat nostrud ex. ",
            Icon: IoBandageSharp,
            iconPosition: "left",
            button: { text: "Thanks m8" },
            fadeSpeed: "fast",
            straightStyles: {
              asideIcon: "text-sky-600",
              button: "border-sky-500 text-sky-600 hover:bg-sky-600",
            },
          });
        }
      },
    });
  }

  return (
    <>
      <div className="text-center mt-16">
        <div className="flex flex-col md:flex-row justify-around">
          <button
            onClick={onHotClick}
            className="mt-8 mb-8 text-xl px-8 py-2 rounded-md border-1 border-orange-500 hover:bg-orange-500 hover:text-gray-100"
          >
            Hot Button
          </button>
        </div>
      </div>
      {Array(5)
        .fill(0)
        .map((x, i) => (
          <div key={i} className="h-64"></div>
        ))}
    </>
  );
}

export default CuteAlertExample;
