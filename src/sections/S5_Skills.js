import React from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { MdLaptop } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { Element as ScrollableContainer } from "react-scroll";
import { chunk } from "lodash";

import { BgContainer, SectionTitle, CuteButton } from "@common/index";
import { useBreakpoint } from "@static/react";
import { typeOf, divide } from "@static/functions";

function Skills({ lang }) {
  const bp = useBreakpoint();
  const [showingSoft, setShowingSoft] = React.useState(false);

  const list = showingSoft ? LISTS.SOFT : LISTS.HARD;
  const ButtonIcon = showingSoft ? MdLaptop : BsFillPersonFill;

  return (
    <ScrollableContainer name="section-skills">
      <BgContainer
        bgClassName={STYLES.bg}
        imgSrc={BACKGROUND}
        className={STYLES.ct}
        overlay="very-strong"
      >
        <SectionTitle
          customStyles={{ title: "text-default", separator: "mb-4" }}
          inverted
        >
          {TRANSLATE_TEXT.title[lang]}
        </SectionTitle>

        <CuteButton
          onClick={() => setShowingSoft(!showingSoft)}
          color="indigo"
          colorStrength="stronger"
          colorsBehavior="always-filled"
          Icon={ButtonIcon}
          straightStyles={{ button: "mt-4 mb-2 text-lg", icon: "text-2xl" }}
        >
          {showingSoft
            ? TRANSLATE_TEXT.seeHard[lang]
            : TRANSLATE_TEXT.seeSoft[lang]}
        </CuteButton>

        {bp.isDesktop() ? (
          <div className={STYLES.list}>
            {divide(list, 2).map((col, index) => (
              <div key={index} className={STYLES.listCol}>
                {col.map((skill, index) => (
                  <Skill {...skill} lang={lang} key={index} />
                ))}
              </div>
            ))}
          </div>
        ) : (
          list.map((skill, index) => (
            <Skill {...skill} lang={lang} key={index} />
          ))
        )}

        <div className={STYLES.finishLine} />
      </BgContainer>
    </ScrollableContainer>
  );
}

function Skill({ name, description, fillStyle, lang }) {
  const [opened, setOpened] = React.useState(false);

  const ExpanderIcon = opened ? IoMdArrowDropdown : IoMdArrowDropup;

  return (
    <div className={STYLES.skill}>
      <p onClick={() => setOpened(!opened)} className={STYLES.skillTitle}>
        {typeOf(name, "string") ? name : name[lang]}{" "}
        <ExpanderIcon className={STYLES.skillExpander} />
      </p>
      {opened && <p className={STYLES.skillDescription}>{description[lang]}</p>}
      <div className={STYLES.skillBar}>
        <div className={STYLES.skillBarFill + fillStyle} />
        <p className={STYLES.skillBarMarker}>
          {TRANSLATE_TEXT.basicLabel[lang]}
        </p>
        <p className={STYLES.skillBarMarker}>
          {TRANSLATE_TEXT.intermediateLabel[lang]}
        </p>
        <p className={STYLES.skillBarMarkerLast}>
          {TRANSLATE_TEXT.advancedLabel[lang]}
        </p>
      </div>
    </div>
  );
}

//prettier-ignore
const STYLES = {
  ct: "pt-4 pb-8 h-160 overflow-y-scroll flex flex-col items-center | sm:h-180 sm:pb-12 sm:pt-8 | md:h-auto md:px-12 md:pt-12",
  bg: "bg-cover bg-center py-8 | md:py-0",

  skill: "mt-6 px-8 self-stretch | md:px-2",
  skillTitle: "text-slate-200 text-center text-2xl flex justify-center items-center cursor-pointer trasition duration-200 hover:text-sky-500 focus:text-sky-500 | lg:text-2.5xl",
  skillExpander: "ml-1 mt-6px shrink-0",
  skillDescription: "mt-2 mb-4 text-slate-200 text-very-light text-center | lg:text-lg lg:text-opacity-90",
  skillBar: "relative mt-3 border-2 border-sky-800 h-8 rounded-full flex items-center | sm:mx-12 | md:mx-4 | lg:mx-12 lg:h-9",
  skillBarFill: "absolute z-0 left-0 top-0 rounded-l-full h-full bg-sky-800 ",
  skillBarMarker: "relative text-sm tracking-wide text-center w-4/12 z-10 text-slate-100 border-r-1 border-slate-100 | sm:text-light sm:text-base | md:text-sm | lg:text-base",
  skillBarMarkerLast: "relative text-sm tracking-wide text-center w-4/12 z-10 text-slate-100 | sm:text-light sm:text-base | md:text-sm | lg:text-base",
 
  finishLine: "mt-8 w-4/12 border-t-2 border-slate-200 border-opacity-60 | md:mt-12",

  //Desktop only

  list: "flex self-stretch",
  listCol: "flex-1 overflow-y-scroll | md:h-136 | lg:h-150",
};

const TRANSLATE_TEXT = {
  title: {
    default: "Skills and Proficiencies",
    spanish: "Mis Habilidades",
  },
  seeSoft: {
    default: "See Soft skills",
    spanish: "Ver habilidades Blandas",
  },
  seeHard: {
    default: "See Hard skills",
    spanish: "Ver habilidades Duras",
  },
  basicLabel: {
    default: "Basic",
    spanish: "Básico",
  },
  intermediateLabel: {
    default: "Intermediate",
    spanish: "Intermedio",
  },
  advancedLabel: {
    default: "Advanced",
    spanish: "Avanzado",
  },
};

const BACKGROUND =
  "https://img.freepik.com/free-photo/man-working-night_1098-12798.jpg?w=900&t=st=1680298437~exp=1680299037~hmac=76b0ae8df73bf3a2a397b6a318eb2c38dc169f6d26f35102ab2c06ce8e32da91";

const LISTS = {
  HARD: [
    {
      name: "JavaScript",
      fillStyle: "w-8/12",
      description: {
        default:
          "Once I understood the freedom and dynamic of JS multiparadigmatic flow, I chose it as my main language. It allows me to develop as I want, provides me tools and lets me set my own limitations instead of forcefully setting them. I'm proud of widely understanding it, but there's a lot of deep ground to learn.",
        spanish:
          "Una vez que entendí la libertad y dinámica del flujo multiparadigmático de JS, lo elegí como mi lenguaje principal. Me da herramientas y me permite desarrollar como yo quiera, dejándome establecerme mis propios límites en lugar de ponerlos a la fuerza. Me enorgullece entenderlo ampliamente, pero todavía hay muchos conceptos profundos por aprender.",
      },
    },
    {
      name: "React.js",
      fillStyle: "w-9/12",
      description: {
        default:
          "I've been working with React.js continously for more than 3 years and eventually fallen in love with the intuitiveness and freedom of the library. It embraces and leverages JS dynamic rather than trying to limit it, and I aim to make the best of that. Still, there's yet a lot of room to improve.",
        spanish:
          "Estuve trabajando continuamente con React.js por más de 3 años y eventualmente me enamoré de su intuitividad y libertad. Entiende y aprovecha la dinámica de JS en lugar de tratar de limitarla, y yo apunto a sacar lo mejor de eso. Aún así, todavía hay mucho espacio para mejorar.",
      },
    },
    {
      name: {
        default: "Redux and API connections",
        spanish: "Redux y conexiones de API",
      },
      fillStyle: "w-9/12",
      description: {
        default:
          "Since the moment I started using React, I did it with Redux included. I've developed my own Redux flow to make it highly efficient and mantainable. In the other hand, I know well how to connect a web app with an API, handling errors, waiting times, batches of data, etc... I also know the basics of websockets.",
        spanish:
          "Desde el momento en que empecé con React, lo hice junto a Redux. Desarrollé mi propio flujo con él para que su uso sea eficiente y mantenible. Además, sé bien cómo conectar una aplicación web con una API, manejar errores, tiempos de espera, lotes de datos, etc... También sé manejar websockets básicamente.",
      },
    },
    {
      name: { default: "CSS with Tailwind", spanish: "CSS con Tailwind" },
      fillStyle: "w-9/12",
      description: {
        default:
          "I discovered TailwindCSS about a year and half ago and it became my only way of CSS since then. It's an incredibly intuitive and efficient library/framework, so I developed my own way of applying styles with it as foundation. I've got no problems with building any provided design.",
        spanish:
          "Descubrí TailwindCSS hace un año y medio y desde entonces es mi única forma de usar CSS. Es una librería/framework increíblemente intuitiva y eficiente, así que desarrollé my propia forma de aplicar estilos con ella. No tengo ningún problema para construir cualquier diseño provisto.",
      },
    },
    {
      name: { default: "English", spanish: "Inglés" },
      fillStyle: "w-8/12",
      description: {
        default:
          "I'm currently able of keeping a medium-paced spoken conversation in english without problems. I'm proud of my writting/reading proficiency with it; I can chat fluidly and I also write and document all my code in 100% english. Right now, improving my English is one of my top priorities.",
        spanish:
          "Actualmente puedo mantener una conversación en inglés a paso intermedio tranquilamente. Estoy orgulloso de mi capacidad de escribir y leer en él; puedo chatear sin ningún problema y además escribo y documento mi código en 100% inglés. Ahora mismo, mejorar mi inglés es una de mis mayores prioridades.",
      },
    },
    {
      name: { default: "Web Design", spanish: "Diseño Web" },
      fillStyle: "w-7/12",
      description: {
        default:
          "My work is extremely bound to design, so I naturally had to learn it to build respectable websites. I know how to make them appealing and easy to use; I can build an entire page without a designer's support. Still, it's not my favourite part and I'd rather work with a professional designer.",
        spanish:
          "Mi trabajo está extremadamente ligado al diseño, así que naturalmente tuve que aprenderlo para hacer sitios web respetables. Sé como hacerlos atractivos y fáciles de usar; puedo construir un sitio web completo sin apoyo de un diseñador. Aún así, no es mi parte favorita y preferiría trabajar con un diseñador profesional.",
      },
    },
    {
      name: { default: "Version control", spanish: "Control de versiones" },
      fillStyle: "w-5/12",
      description: {
        default:
          "I always use git with github to control versions of all my proyects. I understand it's ultimately important to keep the code organized with branches and meaningful commits. Still, as my experience in relatively large teams is limited, so is my experience with git.",
        spanish:
          "Siempre uso git con github para controlar las versiones de todos mis proyectos. Entiendo que es fundamental mantener el código organizado en ramas y commits significativos. Aún así, tengo experiencia limitada en equipos relativamente grandes y, por lo tanto, también en git.",
      },
    },
    {
      name: { default: "APIs with Express.js", spanish: "APIs con Express.js" },
      fillStyle: "w-5/12",
      description: {
        default:
          "I've contributed to the backend of Sana when needed and I know about RESTful API building. I can build a relatively non-complex one from zero and connect it to a provided database. In any case, I'm always able to self-learn whatever's needed.",
        spanish:
          "Contribuí al backend de Sana cuando era necesario y sé algo más de lo básico sobre construir una API RESTful. Puedo armar una relativamente no compleja desde cero y conectarla con una dada base de datos. En cualquier caso, siempre soy capaz de auto-aprender lo que sea necesario.",
      },
    },
    {
      name: { default: "Data bases", spanish: "Bases de datos" },
      fillStyle: "w-3/12",
      description: {
        default:
          "I know the basics of databases but never been yet in the need of effectively implementing one myself. I superficially handled the MySQL db of Sana sometimes, and also \"played\" with MongoDB a few years ago. Still, it's my plan to handle databases properly and I'm willing to learn what it's needed.",
        spanish:
          "Contribuí al backend de Sana cuando era necesario y sé algo más de lo básico sobre construir una API RESTful. Puedo armar una relativamente no compleja desde cero y conectarla con una base de datos sin problemas. En cualquier caso, siempre soy capaz de auto-aprender lo que sea necesario.",
      },
    },
    {
      name: { default: "Others", spanish: "Otros" },
      fillStyle: "w-1/12",
      description: {
        default:
          "I've worked with a few technologies years ago that didn't meet the need to be continued, so I only know the very basics: C language, Java language and Machine Learning. This last one has had an explosive growth lately and so I'm currently returning to learning it.",
        spanish:
          "Trabajé con algunas tecnologías años atrás que no me vi en la necesidad de continuar, así que sólo sé lo básico: lenguaje C, lenguaje Java y Machine Learning. Esta última tuvo un crecimiento explosivo últimamente, por lo que estoy volviendo a aprenderlo.",
      },
    },
  ],
  SOFT: [
    {
      name: { default: "Self-learning", spanish: "Autoaprendizaje" },
      fillStyle: "w-10/12",
      description: {
        default:
          "All my hard skills have been self-taught at full: tech skills, design and even english. I know how to research properly and if something I don't know has to be done I will learn how to do it eventually.",
        spanish:
          "Todas mis habilidades fueron auto-enseñadas completamente: las técnicas, diseño e incluso inglés. Sé cómo investigar adecuadamente y, si debe hacerse algo que no sé hacer, voy a aprender a hacerlo eventualmente.",
      },
    },
    {
      name: { default: "Communication", spanish: "Comunicación" },
      fillStyle: "w-11/12",
      description: {
        default:
          'I always say that a highly-communicative team member, even with rookie skills, is several times more valuable in long-term than a "ghost"-like member no matter how good he/she is. I know how to make myself clear both by text and speech and love to both write and read about my work or that of the others.',
        spanish:
          'Siempre digo que un compañero muy comunicativo, aún con habilidades novatas, es mucho más valioso a largo plazo que un compañero tipo "fantasma" sin importar qué tan bueno sea. Sé como hacerme entender por texto y hablando, y me encanta escribir y leer sobre mi trabajo o el de los demás.',
      },
    },
    {
      name: {
        default: "Pressure and Team work",
        spanish: "Presión y Trabajo en equipo",
      },
      fillStyle: "w-7/12",
      description: {
        default:
          "I lack some experience working in a relatively big team, but I'm always able of keeping myself together when under pressure. I'm a good listener and know how to both colaborate and lead a development team. ",
        spanish:
          "Me falta experiencia trabajando en equipos relativamente grandes, pero siempre soy capaz de mantenerme bien estando bajo presión. Sé escuchar y tanto colaborar como liderar a un equipo de desarrollo.",
      },
    },
    {
      name: {
        default: "Writing and Documentation",
        spanish: "Escritura y Documentación",
      },
      fillStyle: "w-11/12",
      description: {
        default:
          "When it comes to writing and documenting I'm not only very proficient but I also like doing it. I'm at ease with written words and know how to professionaly portray both my thoughts and useful explanations of anything needed.",
        spanish:
          "Cuando se trata de escribir y documentar, no sólo sé hacerlo sino que también me gusta. Me siento cómodo escribiendo y sé como plasmar profesionalmente tanto mis ideas como explicaciones útiles de lo que se requiera.",
      },
    },
  ],
};

export default Skills;
