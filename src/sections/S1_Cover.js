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
      overlay="strong"
    >
      <p className={STYLES.title}>Juan Pablo Medina</p>

      <p className={STYLES.subTitle}>{TRANSLATE_TEXT.subTitle[lang]}</p>

      <BsArrowDown onClick={onArrowClick} className={STYLES.arrow} />
    </BgContainer>
  );
}

//prettier-ignore
const STYLES = {
  ct: "relative h-screen px-6 pt-36 flex flex-col items-center | lg:h-screen-11/12 lg:pt-42",
  bg: "bg-cover bg-center",

  title: "text-6xl tracking-wide text-stronger text-center text-slate-300 | lg:text-7xl",

  subTitle: "border-dotted border-2 border-sky-600 w-full rounded-md text-mono text-3.5xl text-slate-300 text-opacity-90 text-shadow strongest text-center mt-20 py-4 px-4 tracking-wide | md:w-7/12 | lg:mt-24 lg:text-4xl lg:border-3 || sLang<mt-16>",

  arrow: "text-5.5xl animate-bounce text-slate-100 absolute bottom-20 cursor-pointer | md:bottom-8 || sLang<mt-34> ",
};

const COVER_BACKGROUND =
  "https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=900&t=st=1679794850~exp=1679795450~hmac=dc68df02bd03c90fd9bd8ca4cf2d15d804cb666c31787b99a06480590fcc0fca";

const TRANSLATE_TEXT = {
  subTitle: {
    default: "Web Developer",
    spanish: "Desarrollador Web",
  },
};

export default Cover;
