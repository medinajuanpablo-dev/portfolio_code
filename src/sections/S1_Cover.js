import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { scroller } from "react-scroll";

import { BgContainer } from "@common/index";

function Cover({ lang }) {
  function onArrowClick() {
    scroller.scrollTo("section-experience", {
      smooth: true,
      duration: 1000,
      offset: -50,
    });
  }

  return (
    <BgContainer
      bgClassName={STYLES.bg}
      className={STYLES.ct}
      imgSrc={COVER_BACKGROUND}
      overlay="very-strong"
    >
      <p className={STYLES.title}>Juan Pablo Medina</p>

      <p className={STYLES.subTitle}>{TRANSLATE_TEXT.subTitle[lang]}</p>

      <BsArrowDown onClick={onArrowClick} className={STYLES.arrow} />
    </BgContainer>
  );
}

//prettier-ignore
const STYLES = {
  ct: "relative h-screen px-4 pt-36 flex flex-col items-center h-180 | md:h-140 | lg:h-170 | xl:h-180",
  bg: "bg-cover bg-center",

  title: "text-5.5xl tracking-wide text-stronger text-center text-slate-300 w-87 | sm:w-120 sm:text-6.5xl | md:w-180 | lg:w-220 lg:text-7xl | xl:w-auto xl:text-8xl",

  subTitle: "border-dotted border-2 border-sky-600 w-70 rounded-md text-mono text-3xl text-slate-300 text-opacity-90 text-shadow strongest text-center mt-16 pt-2 pb-3 tracking-wide | sm:w-120 | lg:w-160 lg:pt-3 lg:mt-20 lg:text-4xl lg:border-3 || sLang<mt-16>",

  arrow: "text-5.5xl animate-bounce text-slate-100 absolute bottom-12 cursor-pointer | md:bottom-8 || sLang<mt-34> ",
};

const COVER_BACKGROUND =
  "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=900&t=st=1683122392~exp=1683122992~hmac=a4279ce10ac09ddb61904bc55b949a47c3f5175f0e6484db4651d3c10d7fa56a";

const TRANSLATE_TEXT = {
  subTitle: {
    default: "Frontend Developer",
    spanish: "Desarrollador Frontend",
  },
};

export default Cover;
