import React from "react";
import { animateScroll } from "react-scroll";

import { CuteButton, usgMessagesList } from "@common/index";

const displayCuteMessage = usgMessagesList({ maxItems: 3 });

function Home() {
  React.useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <p className="h-200">
      Hello World{" "}
      <CuteButton
        onClick={() => {
          displayCuteMessage({ title: "General Kenobi", body: "Fine piece" });
        }}
      >
        Hello there
      </CuteButton>
    </p>
  );
}

export default Home;
