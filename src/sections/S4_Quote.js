import React from "react";

import { BgContainer } from "@common/index";
import { useBreakpoint } from "@static/react";

import deskAndLampHQ from "@static/values/images/deskAndLamp.jpg";

function Quote({ lang }) {
  const bp = useBreakpoint();

  return (
    <BgContainer
      bgClassName={STYLES.bg}
      imgSrc={bp.isDesktop() ? deskAndLampHQ : BACKGROUND}
      className={STYLES.ct}
    >
      <p className={STYLES.text}>
        {TRANSLATE_TEXT.text[lang]} <br />{" "}
        <span className={STYLES.quoting}>{TRANSLATE_TEXT.quoting[lang]}</span>
      </p>
    </BgContainer>
  );
}

//prettier-ignore
const STYLES = {
  ct: "relative h-95 | sm:h-110",
  bg: "bg-cover bg-center bg-no-repeat | md:bg-bottom ",
  
  text: "absolute right-8 text-very-light top-10 w-8/12 text-right text-xl text-slate-700 text-italic tracking-wide leading-relaxed | sm:top-16 sm:right-10 sm:text-1.5xl | md:text-2xl md:w-6/12 md:right-18 | lg:w-9/24 lg:text-2.5xl lg:right-20 lg:top-16 lg:text-slate-600",
  quoting: "mt-1 text-base text-slate-500 | sm:text-lg | md:text-xl | lg:text-2xl",
};

const TRANSLATE_TEXT = {
  text: {
    default:
      '"A user interface is like a joke. If you have to explain it, it\'s not that good"',
    spanish:
      '"Una interfaz de usuario es como una broma. Si tienes que explicarla, no es tan buena"',
  },
  quoting: {
    default: "— Unknown",
    spanish: "— Desconocido",
  },
};

const BACKGROUND =
  "https://img.freepik.com/free-photo/front-view-desk-elements-arrangement-with-copy-space_23-2148708018.jpg?w=826&t=st=1683059678~exp=1683060278~hmac=ab3f32892aeeafc24a1933bef1024875d2e236269f39e55e79f648cc61ebe92e";
export default Quote;
