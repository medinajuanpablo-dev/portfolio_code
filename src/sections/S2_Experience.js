import React from "react";
import { Element as ScrollableContainer, scroller } from "react-scroll";
import { GiSkills } from "react-icons/gi";
import { BsEnvelopeFill } from "react-icons/bs";

import { SectionTitle, CuteButton } from "@common/index";
import { useBreakpoint } from "@static/react";

function Experience({ lang }) {
  const bp = useBreakpoint();

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
    default: "Experience & About me",
    spanish: "Experiencia y Sobre mí",
  },
  text: {
    default:
      "Out of my 27 years of life, five were focused on multiple ways of training that turned me into thinking as a programmer. The following three years I had a role at Sana Digital along advances on multiple personal web projects. I focus on the details without losing agility and while meeting a balance between eficiency and stability. ",
    spanish:
      "De mis 27 años de vida, cinco fueron dedicados a múltiples formaciones que me hicieron pensar como programador, y los siguientes tres años trabajé en Sana Digital junto a múltiples proyectos web propios. Me enfoco en los detalles sin perder agilidad y conociendo la importancia del equilibrio entre la eficiencia y lo estable.",
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

/**
 * De mis 27 años de vida, cinco fueron dedicados a múltiples formaciones, proyectos y avances privados de
 * diversos tipos que formaron mi mente para pensar como programador. Los siguientes tres años ocupé un puesto
 *  formal como desarrollador en Sana Digital simultáneamente con avances en múltiples proyectos web propios.
 *
 * Soy un programador detallista y concentrado en la estabilidad sin perder agilidad. La experiencia me enseñó
 * la importancia de lo simple y del equilibrio entre la eficiencia y lo estable. Estoy siempre buscando seguir
 *  practicando, investigando y aprendiendo más.
 *
 *
 * De mis 27 años de vida, cinco fueron dedicados a múltiples formaciones que me hicieron pensar como programador. Los siguientes tres años trabajé en Sana Digital junto a múltiples proyectos web propios. Me enfoco en los detalles sin perder agilidad y conociendo la importancia del equilibrio entre la eficiencia y lo estable.
 *
 */

export default Experience;
