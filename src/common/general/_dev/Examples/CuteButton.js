import React from "react";
import { FaHandPeace } from "react-icons/fa";

import { CuteButton, usgMessagesList } from "@common/index";

const displayMessagesList = usgMessagesList({
  maxItems: 2,
  appeareanceSide: "bottom",
});

function CuteButtonExample() {
  return (
    <div className="flex justify-center">
      <CuteButton
        onClick={() =>
          displayMessagesList({
            title: "Le hiciste click al boton.",
            body: "Que capo.",
          })
        }
        Icon={FaHandPeace}
        color="purple"
        straightStyles={{ button: "px-2", icon: "text-xl mb-2px" }}
      />
    </div>
  );
}

export default CuteButtonExample;
