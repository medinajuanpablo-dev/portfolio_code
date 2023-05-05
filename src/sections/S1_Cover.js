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
  ct: "relative h-screen px-6 pt-36 flex flex-col items-center | lg:pt-42",
  bg: "bg-cover bg-center",

  title: "text-6xl tracking-wide text-stronger text-center text-slate-300 | lg:text-7xl",

  subTitle: "border-dotted border-2 border-sky-600 w-full rounded-md text-mono text-3.5xl text-slate-300 text-opacity-90 text-shadow strongest text-center mt-16 py-4 px-4 tracking-wide | md:w-7/12 | lg:w-6/12 lg:mt-24 lg:text-4xl lg:border-3 || sLang<mt-16>",

  arrow: "text-5.5xl animate-bounce text-slate-100 absolute bottom-20 cursor-pointer | md:bottom-8 || sLang<mt-34> ",
};

const COVER_BACKGROUND =
  "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=900&t=st=1683122392~exp=1683122992~hmac=a4279ce10ac09ddb61904bc55b949a47c3f5175f0e6484db4651d3c10d7fa56a";

const TRANSLATE_TEXT = {
  subTitle: {
    default: "Web Developer",
    spanish: "Desarrollador Web",
  },
};

export default Cover;
