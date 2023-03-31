import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";

import { CuteActionNotice } from "@common/index";

function CuteActionNoticeExample() {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <div className="relative text-center text-slate-600 text-light">
        Let's get to it!{" "}
        <CuteActionNotice
          ButtonIcon={BsQuestionCircle}
          Icon={IoWarningOutline}
          title="Warning!"
          body="Excepteur exercitation tempor irure non et amet."
          position="left"
          showing={active}
          onSwitch={(showing) => setActive(showing)}
          behavior="focus"
          straightStyles={{ ct: "!absolute  text-left right-18 top-0" }}
        />
      </div>

      <button
        className="mt-8 border-1 border-gray-800 px-4 py-2"
        onClick={() => setActive(!active)}
      >
        Externally {active ? "hide" : "show"}
      </button>
    </>
  );
}

export default CuteActionNoticeExample;
