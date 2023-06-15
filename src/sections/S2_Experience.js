import React from "react";
import { Element as ScrollableContainer, scroller } from "react-scroll";
import { GiSkills } from "react-icons/gi";
import { BsEnvelopeFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import { SectionTitle, CuteButton, KamaiIcon } from "@common/index";
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
      <p className={STYLES.title}>{TRANSLATE_TEXT.title[lang]}</p>
      <div className={STYLES.separator} />

      <p className={STYLES.text}>{TRANSLATE_TEXT.text[lang]}</p>

      <div className={STYLES.expList}>
        {EXPERIENCE_ROLES.map((exp, index) => (
          <div key={index} className={STYLES.exp}>
            <div className={STYLES.expTitle}>
              {exp.logo} {exp.title[lang]}
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
                {TRANSLATE_TEXT.goTo[lang]}
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
          color="indigo"
          colorStrength="lighter"
          straightStyles={{ button: "flex-1 mr-1 lg<px-0> | md:mr-3" }}
          Icon={GiSkills}
          onClick={() => onButtonClick("section-skills")}
        >
          {TRANSLATE_TEXT.skillsButton[lang]}
        </CuteButton>
        <CuteButton
          size="larger"
          color="indigo"
          colorStrength="lighter"
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
  ct: "pt-12 pb-14 bg-gray-100 | lg:py-16",
  title: "text-center text-slate-600 text-strong w-87 m-auto text-3.5xl | sm:w-120 sm:text-4xl | lg:text-4.5xl",
  separator: "mt-8 w-30 border-t-2 border-sky-500 mx-auto",
  
  text: "mt-8 text-lg text-slate-700 text-very-light leading-relaxed text-center w-87 mx-auto | sm:w-130 | md:w-170 | lg:w-200 lg:mt-12 lg:text-xl | xl:w-260",

  expList: "justify-center | md:flex md:mt-12",
  exp: "text-slate-600 border-t-1 border-slate-300 w-87 mx-auto pt-6 mt-8 | sm:w-120 sm:mt-10 sm:pt-8 | md:w-90 md:mx-6 md:border-y-1 md:py-8 md:mt-0 | lg:mx-8 lg:w-110 | xl:w-130 ",
  expTitle: "flex justify-center items-center text-xl text-strong | lg:text-2xl | xl:text-2.5xl",
  expSub: "flex items-center text-sm text-light mb-3 mt-1 text-slate-500 justify-center | md:mb-4 | lg:text-base",
  expLink: "flex items-center justify-center border-l-1 border-slate-300 ml-3 pl-3 text-indigo-600 text-opacity-80 hover:text-opacity-100 focus:text-opacity-100",
  expLinkIcon: "mr-1 text-base | lg:text-lg",
  expIcon: "text-xl mr-2 text-sky-700 | lg:text-2xl",
  expPoint: "flex text-justify text-sm text-very-light mt-1 text-slate-500 | md:justify-center | lg:text-base | xl:text-lg",

  sanaLogo: "w-7 h-7 rounded-full mr-2 opacity-70 | lg:w-8 lg:h-8",
  kamaiLogo: "w-7 h-7 text-kamai mt-1px mr-2 opacity-80 | lg:w-8 lg:h-8",

  buttons: "mt-10 w-87 mx-auto flex | sm:w-100 sm:mt-12 | md:px-0 md:w-8/12 md:mx-auto | lg:mt-12"
};

const TRANSLATE_TEXT = {
  title: {
    default: "Experience & About me",
    spanish: "Experiencia y Sobre mí",
  },
  text: {
    default:
      "I'm a 27-year-old developer focused on the details while keeping an estable and agile work. My passion lies on creating intuitive and elegant interfaces, particularly on the web. I'm assertive and open-minded, highly self-taught, and I love to challenge myself and work on complex projects that push me to learn more. Welcome to my portfolio.",
    spanish:
      "Soy un desarrollador de 27 años enfocado en los detalles y manteniendo un trabajo estable y ágil. Mi pasión está en las interfaces intuitivas y elegantes, así como en la web. Soy asertivo y de mente abierta, soy altamente autodidacta, y me encanta establecerme desafíos y proyectos complejos que me impulsen a aprender más. Bienvenido a mi portfolio.",
  },
  skillsButton: {
    default: "See Skills",
    spanish: "Habilidades",
  },
  contactButton: {
    default: "Contact me",
    spanish: "Contáctame",
  },
  goTo: {
    default: "Go to web",
    spanish: "Ir a la web",
  },
};

const EXPERIENCE_ROLES = [
  {
    logo: (
      <img
        alt="logoSana"
        className={STYLES.sanaLogo}
        src="https://sana-public-files.s3.amazonaws.com/sana.png"
      />
    ),
    title: {
      default: "Fullstack Dev at Sana Digital",
      spanish: "Fullstack Dev en Sana Digital",
    },
    dates: { default: "Dec 2019 - Present", spanish: "Dic 2019 — Actualidad" },
    points: {
      default: [
        "In charge of developing the website from start to finish and leading the development team. Aditionally, I actively contribute to the backend of the platform and provide ocassional maintenance for the mobile app.",
      ],
      spanish: [
        "A cargo de desarrollar el sitio web por completo y liderar el equipo de desarrollo. Además, contribuyo activamente al backend de la plataforma y doy mantenimiento ocasional a la aplicación móvil.",
      ],
    },
    link: "https://www.sanadigital.com/",
  },
  {
    logo: <KamaiIcon className={STYLES.kamaiLogo} />,
    title: {
      default: "Founder of Kamai",
      spanish: "Fundador de Kamai",
    },
    dates: { default: "Jun 2022 - Present", spanish: "Jun 2022 - Actualidad" },
    points: {
      default: [
        "Start-up focused on development of fully customized web systems of all types, as well as complete digital presentations. It started over a year ago and after a lot of work we managed to set ground and grow.",
      ],
      spanish: [
        "Start-up de desarrollo de sistemas web personalizados de todo tipo y presentaciones digitales completas. Empezó hace más de un año y tras mucho trabajo logramos asentarnos y crecer.",
      ],
    },
    link: "https://www.kamai.com.ar/",
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
