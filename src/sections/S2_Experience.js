import React from "react";
import { Element as ScrollableContainer, scroller } from "react-scroll";
import { GiSkills } from "react-icons/gi";
import { BsEnvelopeFill, BsBriefcaseFill, BsDot } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

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

      <div className={STYLES.expList}>
        {EXPERIENCE_ROLES.map((exp, index) => (
          <div key={index} className={STYLES.exp}>
            <div className={STYLES.expTitle}>
              <img
                alt="logoSana"
                className={STYLES.expImage}
                src="https://sana-public-files.s3.amazonaws.com/sana.png"
              />
              {exp.title[lang]}
            </div>
            <p className={STYLES.expSub}>
              {/* <BsBriefcaseFill className={STYLES.expIcon} /> */}
              {exp.dates[lang]}

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={exp.link}
                className={STYLES.expLink}
              >
                <FiExternalLink className={STYLES.expLinkIcon} />
                Ir a la web
              </a>
            </p>

            {exp.points[lang].map((point, index) => (
              <p key={index} className={STYLES.expPoint}>
                {point}
              </p>
            ))}
          </div>
        ))}
      </div>

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
  ct: "px-6 pt-12 pb-14 bg-gray-100 | sm:px-10 | lg:px-28 lg:py-16",
  
  text: "mt-8 text-lg text-slate-700 text-very-light tracking-wide leading-relaxed text-center | md:px-16 | lg:px-20 lg:mt-12 lg:text-xl",

  expList: "justify-center | md:flex md:mt-12",
  exp: "text-slate-600 border-t-1 border-slate-300 pt-6 mt-8 | md:border-y-1 md:py-8 md:mt-0 md:px-6 ",
  expTitle: "flex justify-center items-center text-xl text-strong | lg:text-2xl",
  expImage: "w-7 h-7 rounded-full mr-3 opacity-70 | lg:w-8 lg:h-8",
  expSub: "flex items-center text-sm text-light mb-3 mt-1 text-slate-500 justify-center | md:mb-4 | lg:text-base",
  expLink: "flex items-center justify-center border-l-1 border-slate-300 ml-3 pl-3 text-indigo-600 text-opacity-80 hover:text-opacity-100 focus:text-opacity-100",
  expLinkIcon: "mr-1 text-base | lg:text-lg",
  expIcon: "text-xl mr-2 text-sky-700 | lg:text-2xl",
  expPoint: "flex pl-2 pr-2 text-sm text-very-light mt-1 text-slate-500 | md:justify-center | lg:text-base",

  buttons: "mt-10 flex w-full | sm:px-8 | md:px-0 md:w-8/12 md:mx-auto | lg:mt-12"
};

const TRANSLATE_TEXT = {
  title: {
    default: "Experience & About me",
    spanish: "Experiencia y Sobre mí",
  },
  text: {
    default:
      "I'm a 27 years old detailed developer focused on stability without losing agility and conscious of the importance between eficiency and the stable. My passion is in intuitive and elegant user interfaces.",
    spanish:
      "Soy un desarrollador de 27 años detallista y enfocado en la estabilidad sin perder agilidad, consciente de la importancia del equilibrio entre la eficiencia y lo estable. Mi pasión son las interfaces intuitivas y elegantes para el usuario. ",
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

const EXPERIENCE_ROLES = [
  {
    title: {
      default: "Fullstack Dev en Sana Digital",
      spanish: "Fullstack Dev en Sana Digital",
    },
    dates: { default: "Dec 2019 - 2021", spanish: "Dic 2019 — 2021" },
    points: {
      default: [
        "Development of the website from scratch.",
        "Mobile app maintenance.",
        "Contributor of the platform backend.",
        "Development team leading.",
      ],
      spanish: [
        "Desarrollar la página web desde el inicio.",
        "Mantenimiento de la aplicación móvil.",
        "Contribuyente del backend de la plataforma.",
        "Liderazgo del equipo de desarrollo.",
      ],
    },
    link: "https://www.sanadigital.com/",
  },
  {
    title: {
      default: "Web Dev en Sana Digital",
      spanish: "Web Dev en Sana Digital",
    },
    dates: { default: "2021 - Feb 2023", spanish: "2021 - Feb 2023" },
    points: {
      default: [
        "Focus most on the website development.",
        "Contributor of the platform backend.",
        "Leadership of the development team.",
      ],
      spanish: [
        "Mayor foco en el desarrollo de la página Web.",
        "Contribuyente del backend de la plataforma.",
        "Liderazgo del equipo de desarrollo.",
      ],
    },
    link: "https://www.sanadigital.com/",
  },
];

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
