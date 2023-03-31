import React from "react";
import { FaHandPeace } from "react-icons/fa";

import { displayBottomNotif, CuteButton } from "@common/index";

function CuteBottomNotifExample() {
  return (
    <div className="flex justify-center">
      <CuteButton
        onClick={() =>
          displayBottomNotif({
            Icon: FaHandPeace,
            title: "Yes, daddy!",
            body: "More!",
            type: "light-change",
          })
        }
        Icon={FaHandPeace}
        color="purple"
        straightStyles={{ icon: "text-xl mb-2px" }}
      >
        Touch me
      </CuteButton>
    </div>
  );
}

export default CuteBottomNotifExample;
