import React from "react";

import { BgContainer, SectionTitle } from "@common/index";
import { useBreakpoint } from "@static/react";

function Summary({ lang }) {
  const bp = useBreakpoint();

  const content = (
    <>
      <SectionTitle customStyles={{ separator: "mb-8" }}>
        {TRANSLATE_TEXT.title[lang]}
      </SectionTitle>

      <p className={STYLES.text}>{TRANSLATE_TEXT.text[lang]}</p>

      <p className={STYLES.text}>{TRANSLATE_TEXT.text2[lang]}</p>
    </>
  );

  return bp.isDesktop() ? (
    <div className={STYLES.wrapper}>
      <div
        style={{ backgroundImage: `url(${DESKTOP_IMG})` }}
        className={STYLES.sideImage}
      />
      <div className={STYLES.contentBox}>{content}</div>
    </div>
  ) : (
    <BgContainer
      bgClassName={STYLES.bg}
      imgSrc={BACKGROUND}
      className={STYLES.ct}
    >
      {content}
    </BgContainer>
  );
}

//prettier-ignore
const STYLES = {
  ct: "relative pt-8 pb-76 px-6 | sm:px-10 sm:pb-120 sm:pt-12",
  bg: "bg-contain bg-bottom bg-no-repeat bg-slate-100 | sm:bg-cover",
  
  text: "mt-6 text-very-light text-slate-700 text-lg leading-relaxed tracking-wide text-center | sm:text-xl | md:text-lg | lg:text-xl",

  //Desktop only

  wrapper: "flex",
  sideImage: "grow bg-right bg-cover",
  contentBox: "bg-slate-100 w-7/12 shrink-0 px-10 py-10 | lg:w-6/12 lg:p-14",
};

const TRANSLATE_TEXT = {
  title: {
    default: "Summary",
    spanish: "Resumen",
  },
  text: {
    default:
      "With 3 years of experience, a good english to work remotely, proficiency with React/Redux and Design, and decisive ability to communicate and keep everything reported / documented, I'm able to professionaly contribute to or lead a web developing team, or to do it alone too.",
    spanish:
      "Con 3 años de experiencia, un buen inglés para trabajar remoto, habilidad con React/Redux y Diseño, y una capacidad decisiva para comunicarme y mantener todo informado / documentado, soy capaz de contribuir o liderar profesionalmente un equipo de desarrollo web, o también hacerlo solo.",
  },
  text2: {
    default:
      "I learned all my skills by my own. I know very well how to research and study by myself, and I'm capable of learning whatever is necessary to work and adapt to any circumstance.",
    spanish:
      "Aprendí todas mis habilidades por mi cuenta. Sé muy bien como investigar y estudiar yo solo, y soy capaz de aprender lo necesario para trabajar y adaptarme a cualquier circunstancia.",
  },
};

const BACKGROUND =
  "https://img.freepik.com/free-photo/view-desk-arrangement-with-laptop_23-2148128332.jpg?w=740&t=st=1682598129~exp=1682598729~hmac=b121ba781ef8f512c0743b21e4225db431c477f9bdcacd339ddda830917aeaaf";

const DESKTOP_IMG =
  "https://img.freepik.com/free-photo/arrangement-with-laptop-plant_23-2148594508.jpg?w=900&t=st=1682774141~exp=1682774741~hmac=398572f81bb872bb3a2b010c9f54b7579697f800584490b31951e857ceb38769";

export default Summary;
