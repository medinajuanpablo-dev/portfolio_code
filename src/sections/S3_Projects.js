import React from "react";
import { Element as ScrollableContainer } from "react-scroll";
import { MdArrowForwardIos, MdLaptop } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { BgContainer, SectionTitle, KamaiIcon } from "@common/index";
import { useBreakpoint } from "@static/react";

import { BREAKPOINTS_WIDTHS } from "@static/values/config";
import { BREAKPOINTS as BPK } from "@static/values/keys";

import chqpImage from "@static/values/images/chqp.png";
import timehudImage from "@static/values/images/timeHud.png";
import wdImage from "@static/values/images/wd.png";
import portfolioImage from "@static/values/images/portfolio.png";
import tooledTemplateImage from "@static/values/images/tooledTemplate.png";

function Proyects({ lang }) {
  const bp = useBreakpoint();
  const carouselRef = React.useRef();

  return (
    <ScrollableContainer name="section-projects">
      <BgContainer
        bgClassName={STYLES.bg}
        imgSrc={BACKGROUND}
        className={STYLES.ct}
        overlay="very-strong"
      >
        <SectionTitle inverted textSize="smaller">
          {TRANSLATE_TEXT.title[lang]}
        </SectionTitle>

        <div className={STYLES.list}>
          <button
            onClick={() => carouselRef.current.slidePrev()}
            className={STYLES.arrowCt + STYLES.arrowLeft}
          >
            <MdArrowForwardIos className={STYLES.arrow} />
          </button>
          <AliceCarousel
            mouseTracking
            responsive={{
              0: { items: 1 },
              [BREAKPOINTS_WIDTHS[BPK.LAPTOP]]: { items: 2 },
            }}
            ref={carouselRef}
            items={PROYECTS.map((proy) => (
              <div className={STYLES.proyect}>
                {proy.picture ? (
                  <div
                    className={STYLES.proyPicture}
                    style={{ backgroundImage: `url(${proy.picture})` }}
                  />
                ) : (
                  proy.icon
                )}
                <p className={STYLES.proyTitle}>{proy.title}</p>
                <p className={STYLES.proyLinksCt}>
                  {proy.links.web && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={proy.links.web}
                      className={STYLES.proyLink}
                    >
                      <FiExternalLink className={STYLES.proyLinkIcon} />{" "}
                      <span className={STYLES.proyLinkText}>
                        {TRANSLATE_TEXT.webLink[lang]}
                      </span>
                    </a>
                  )}
                  {proy.links.github && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={proy.links.github}
                      className={STYLES.proyLink}
                    >
                      <FaGithub className={STYLES.proyLinkIcon} />{" "}
                      <span className={STYLES.proyLinkText}>
                        {TRANSLATE_TEXT.githubLink[lang]}
                      </span>
                    </a>
                  )}
                  {Object.keys(proy.links).length == 0 && (
                    <span className={STYLES.proyNoLinks}>
                      No available links
                    </span>
                  )}
                </p>
                <p className={STYLES.proyText}>{proy.text[lang]}</p>
              </div>
            ))}
            disableButtonsControls
            disableDotsControls
            infinite
          />
          <button
            onClick={() => carouselRef.current.slideNext()}
            className={STYLES.arrowCt + STYLES.arrowRight}
          >
            <MdArrowForwardIos className={STYLES.arrow} />
          </button>

          {!bp.isDesktop() && <MdLaptop className={STYLES.balancerIcon} />}
        </div>
      </BgContainer>
    </ScrollableContainer>
  );
}

//prettier-ignore
const STYLES = {
  ct: "relative pt-12 pb-12 flex flex-col items-center | md:px-8 | lg:px-16",
  bg: "bg-cover bg-center",
  
  list: "relative w-full",

  arrowCt: "z-50 absolute top-50 cursor-pointer text-sky-500 p-3 rounded-full transition duration-300 border-sky-600 border-opacity-30 border-2 hover:border-opacity-80 focus:border-opacity-80 | lg:top-50",
  arrow: "translate-x-1px text-xl | lg:text-2xl",
  arrowLeft: " rotate-180 left-4 | sm:left-10 | md:left-20  lg:-left-4",
  arrowRight: " right-4 | sm:right-10 | md:right-20 | lg:-right-4",

  proyect: "relative flex flex-col items-center mx-4 px-4 pt-12 | sm:px-8 | md:pt-8 | lg:px-4",
  proyPicture: "rounded-full w-48 h-48 bg-cover bg-center shadow-md | sm:w-56 sm:h-56 | md:w-48 md:h-48",
  proyIcon: "",
  proyTitle: "mt-8 text-2.5xl text-strong text-slate-200 tracking-wide | sm:text-3xl | md:mt-6 | lg:text-3.5xl",
  proyLinksCt: "mt-8 self-stretch flex justify-around items-center h-8 | md:justify-center | md:mt-6",
  proyLink: "flex justify-center items-center text-light text-indigo-300 | sm:text-lg | md:mx-6",
  proyLinkIcon: "mr-2 text-3xl mb-1",
  proyLinkText: "border-b-2 pb-1 border-indigo-300 border-opacity-0 transition duration-300 hover:border-opacity-70",
  proyNoLinks: "text-slate-300 text-light text-center text-opacity-60 | sm:text-lg sm:text-opacity-50",
  proyText: "mt-8 pb-4 text-lg text-very-light text-slate-200 tracking-wide !leading-normal break-words text-left | sm:text-xl sm:text-opacity-90 | md:mt-6 | md:text-justify",

  balancerIcon: "absolute -bottom-8 right-6 h-50 w-50 text-slate-400 text-opacity-10",

  kamai: "w-48 h-48 p-8 rounded-full bg-kamai text-white | sm:w-56 sm:h-56 | md:w-48 md:h-48",
};

const TRANSLATE_TEXT = {
  title: {
    default: "My Jobs and Projects",
    spanish: "Trabajos y Proyectos",
  },
  webLink: {
    default: "Go to web",
    spanish: "Ir a la web",
  },
  githubLink: {
    default: "Repository",
    spanish: "Repositorio",
  },
};

const BACKGROUND =
  "https://img.freepik.com/free-photo/turned-gray-laptop-computer_400718-47.jpg?w=900&t=st=1681148726~exp=1681149326~hmac=5b9a339affba7612b935f8f032918d367f97ef524b7472c5ccfa18921bd7ebdf";

//prettier-ignore
const PROYECTS = [
  {
    picture: "https://sana-public-files.s3.amazonaws.com/sana.png",
    title: "Sana Digital",
    links: {
      web: "https://www.sanadigital.com",
    },
    text: {
      default: "I worked at Sana Digital as a full stack developer since 2019 for about 2 years, and then my role focused into web development only for the 3rd year. I contributed for a big portion of the design, backend and project management, and the web frontend was entirely built and mantained by me.",
      spanish: "Trabajé en Sana Digital como desarrollador fullstack desde 2019 durante aproximadamente 2 años, después mi rol se enfocó en sólo desarrollo web durante el 3er año. Contribuí en gran parte al diseño, backend y coordinación del proyecto, y el frontend web fue totalmente construido y mantenido por mí.",
    },
  },
  {
    icon: <KamaiIcon className={STYLES.kamai} />,
    title: "Kamai",
    links: {
      web: "https://e-kamai.github.io/medicoejemplo/",
    },
    text: {
      default: "A personal start-up project of selling minimalistic, elegant and affordable web pages locally in Argentina. The link redirects to an example production page; the main web is currently on development.",
      spanish: "Un emprendimiento personal sobre vender localmente páginas web minimalistas, elegantes y accesibles económicamente. El link redirige a una página producto de ejemplo; la web principal está aún en desarrollo.",
    },
  },
  {
    picture: chqpImage,
    title: "Cuánto Hay Que Poner",
    links: {
      web: "https://slardptor.github.io/cuantohayqueponer/",
      github: "https://github.com/SlarDptor/cuantohayqueponer",
    },
    text: {
      default: "An easy web application that eases the calculation of contributions for each member of a group of persons when making expenses. Can be used for any amount of expenses done and persons involved, with different contributions and consumptions. It's in spanish only as it was aimed to be used locally in Argentina.",
      spanish: "Una aplicación web sencilla que facilita el cálculo de la contribución de cada miembro de un grupo al realizar gastos. Puede usarse para cualquier cantidad de gastos y personas involucradas, con diferentes contribuciones y consumiciones.",
    },    
  },
  {
    picture: timehudImage,
    title: "Time HUD",
    links: {
      web: "https://slardptor.github.io/time_hud/",
      github: "https://github.com/SlarDptor/time_hud",
    },
    text: {
      default: "An application I made for myself, to both keep track of how much time I spend in certain ambits and to set myself time objectives and limits on said ambits. As it's for self-use only, I built it in just a week by recycling code and design from other projects.",
      spanish: "Una aplicación que hice para mí mismo, tanto para mantener un registro de cuánto tiempo gasto en ciertos ámbitos como también para establecerme objectivos y límites en dichos ámbitos. Como es para uso propio, la construí en sólo una semana reciclando código y diseños de otros proyectos.",
    },    
  },
  {
    picture: tooledTemplateImage,
    title: "Tooled Template",
    links: {},
    text: {
      default: "A ready-to-use project template including all my custom tools, structure, libraries, workflow and most importantly: my custom components. I'm constantly keeping it updated to the relentless race of technology.",
      spanish: "Una plantilla de proyecto lista para usar que incluye todas mis herramientas personalizadas, estructura, librerías, flujo de trabajo y lo más importante: mis componentes personalizados. Estoy constantemente manteniéndola actualizada al imparable avance de la tecnología.",
    },    
  },
  {
    picture: wdImage,
    title: "Work Defense",
    links: {
      github: "https://github.com/SlarDptor/work_defense",
    },
    text: {
      default: "An interface-based management game that aims to both be fun and to help life motivation by rewarding real work with in-game resources. I started this years ago and developed it slowly and lovefully; it teached me a lot along the way. It's currently about 80% finished and in full english.",
      spanish: "Un juego de gestión basado en interfaces cuyo objetivo es tanto divertir como motivar en la vida recompensando el trabajo real con recursos dentro del juego. Lo empecé hace años y fui desarrollándolo lenta y cariñosamente; me enseñó muchísimo en el camino. Está aproximadamente un 80% terminado y sólo en inglés.",
    },    
  },
  {
    picture: portfolioImage,
    title: "Portfolio",
    links: {
      github: "https://github.com/SlarDptor/portfolio_code",
    },
    text: {
      default: "Just like the other projects, both the portfolio's design and code were fully developed by me from scratch. I didn't use any specific design nor any third-party template code.",
      spanish: "Así como con los otros proyectos, tanto el diseño como el código del portfolio fueron totalmente desarrollados por mí desde la base. No usé ningún diseño específico ni ninguna plantilla de código de terceros.",
    },    
  },
];

export default Proyects;
