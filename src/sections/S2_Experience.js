import React from "react";
import { Element as ScrollableContainer, scroller } from "react-scroll";
import { GiSkills } from "react-icons/gi";
import { BsEnvelopeFill } from "react-icons/bs";

import { SectionTitle, CuteButton } from "@common/index";

function Experience({ lang }) {
  function onButtonClick(to) {
    scroller.scrollTo(to, {
      smooth: true,
      duration: 1000,
      offset: -50,
    });
  }

  return (
    <ScrollableContainer name="section-experience" className={STYLES.ct}>
      <SectionTitle>{TRANSLATE_TEXT.title[lang]}</SectionTitle>

      <p className={STYLES.text}>{TRANSLATE_TEXT.text[lang]}</p>

      <div className={STYLES.buttons}>
        <CuteButton
          size="larger"
          color="sky"
          straightStyles={{ button: "flex-1 mr-1 lg<px-0> | md:mr-3" }}
          Icon={GiSkills}
          onClick={() => onButtonClick("section-skills")}
        >
          {TRANSLATE_TEXT.skillsButton[lang]}
        </CuteButton>
        <CuteButton
          size="larger"
          color="sky"
          straightStyles={{ button: "flex-1 ml-1 lg<px-0> | md:ml-3" }}
          Icon={BsEnvelopeFill}
          onClick={() => onButtonClick("section-contact")}
        >
          {TRANSLATE_TEXT.contactButton[lang]}
        </CuteButton>
      </div>
    </ScrollableContainer>
  );
}

//prettier-ignore
const STYLES = {
  ct: "px-4 pt-12 pb-14 bg-gray-100 flex flex-col items-center | sm:px-10 | lg:px-40 lg:py-16",
  
  text: "mt-8 px-2 text-xl text-slate-700 text-very-light tracking-wide leading-relaxed text-center | lg:mt-12 lg:text-1.5xl",

  buttons: "mt-8 flex px-4 w-full | sm:px-8 | md:px-0 md:w-8/12 | lg:mt-12"
};

const TRANSLATE_TEXT = {
  title: {
    default: "Three years of Experience",
    spanish: "Tres años de Experiencia",
  },
  text: {
    default:
      "I had a fullstack role at Sana Digital for 3 years while also working on my own web projects. Experience has teached me the relevance of simplicity, and of finding a balance between efficiency and stability. I'm always craving to keep practicing, researching and learning more.",
    spanish:
      "Trabajé en Sana Digital durante 3 años mientras también avanzaba en mis propios proyectos web. La experiencia me enseñó la importancia de lo simple, y de encontrar un equilibrio entre la eficiencia y la estabilidad. Siempre busco seguir practicando, investigando y aprendiendo más.",
  },
  skillsButton: {
    default: "See Skills",
    spanish: "Habilidades",
  },
  contactButton: {
    default: "Contact me",
    spanish: "Contáctame",
  },
};

export default Experience;
