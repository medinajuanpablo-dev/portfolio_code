import React from "react";
import { FaHandPeace } from "react-icons/fa";

import { CuteLineTitle, CuteButton } from "@common/index";

function CuteLineTitleExample() {
  return (
    <div className="flex flex-col">
      <CuteLineTitle straightStyles={{ line: "border-sky-500" }}>
        Super Button
      </CuteLineTitle>

      <CuteButton
        Icon={FaHandPeace}
        color="emerald"
        straightStyles={{ button: "mt-6 self-center", icon: "text-xl mb-2px" }}
      >
        A Button
      </CuteButton>

      <CuteLineTitle subtitle straightStyles={{ ct: "mt-6" }}>
        Less super Button
      </CuteLineTitle>

      <CuteButton
        Icon={FaHandPeace}
        color="purple"
        size="smaller"
        straightStyles={{ button: "mt-6 self-center", icon: "text-xl mb-2px" }}
      >
        Another Button
      </CuteButton>
    </div>
  );
}

export default CuteLineTitleExample;
