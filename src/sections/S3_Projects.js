import React from "react";
import { Element as ScrollableContainer } from "react-scroll";
import { MdArrowForwardIos, MdLaptop } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import { GiSwordSpade } from "react-icons/gi";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { BgContainer, SectionTitle, KamaiIcon } from "@common/index";
import { useBreakpoint } from "@static/react";

import { BREAKPOINTS_WIDTHS } from "@static/values/config";
import { BREAKPOINTS as BPK } from "@static/values/keys";

import portfolioImage from "@static/values/images/portfolio.png";
import tooledTemplateImage from "@static/values/images/tooledTemplate.png";
import { typeOf } from "@static/functions";

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
                <p className={STYLES.proyTitle}>
                  {typeOf(proy.title, "string") ? proy.title : proy.title[lang]}
                </p>
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
                      {TRANSLATE_TEXT.noLinks[lang]}
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

  arrowCt: "z-50 absolute top-50 cursor-pointer text-sky-500 p-3 rounded-full transition duration-300 border-sky-600 border-opacity-30 border-2 hover:border-opacity-80 focus:border-opacity-80 | md:top-40 | lg:top-50",
  arrow: "translate-x-1px text-xl | lg:text-2xl",
  arrowLeft: " rotate-180 left-4 | sm:left-10 | md:left-20  lg:-left-4",
  arrowRight: " right-4 | sm:right-10 | md:right-20 | lg:-right-4",

  proyect: "relative flex flex-col items-center mx-auto pt-12 w-85 | sm:w-120 | md:w-160 md:pt-8 | lg:w-110 | xl:w-130",
  proyPicture: "rounded-full w-48 h-48 bg-cover bg-center shadow-md | sm:w-56 sm:h-56 | md:w-48 md:h-48",
  proyIcon: "",
  proyTitle: "mt-8 text-2.5xl text-strong text-slate-200 tracking-wide | sm:text-3xl | md:mt-6 | lg:text-3.5xl",
  proyLinksCt: "mt-8 self-stretch flex justify-around items-center h-8 | md:justify-center | md:mt-6",
  proyLink: "flex justify-center items-center text-light text-indigo-300 | sm:text-lg | md:mx-6",
  proyLinkIcon: "mr-2 text-3xl mb-1",
  proyLinkText: "border-b-2 pb-1 border-indigo-300 border-opacity-0 transition duration-300 hover:border-opacity-70",
  proyNoLinks: "text-slate-300 text-light text-center text-opacity-60 | sm:text-lg sm:text-opacity-50",
  proyText: "mt-8 pb-4 text-lg text-very-light text-slate-200 tracking-wide !leading-normal break-words text-left | sm:text-opacity-90 | md:mt-6 | md:text-justify",

  balancerIcon: "absolute -bottom-8 right-6 h-50 w-50 text-slate-400 text-opacity-10",

  kamai: "w-48 h-48 p-8 rounded-full bg-kamai text-white | sm:w-56 sm:h-56 | md:w-48 md:h-48",
  chqp: "w-48 h-48 pb-4 pl-2 flex justify-center items-center text-strong text-5.5xl tracking-widest rounded-full border-4 border-purple-500 text-purple-500 | sm:w-56 sm:h-56 | md:w-48 md:h-48",
  timeHUD: "w-48 h-48 p-10 rounded-full bg-teal-700 bg-opacity-80 border-slate-200 border-1 text-slate-200 | sm:w-56 sm:h-56 | md:w-48 md:h-48",
  wd: "w-48 h-48 flex justify-center items-center rounded-full border-4 border-slate-200 text-slate-200 | sm:w-56 sm:h-56 | md:w-48 md:h-48",
  wdIcon: "w-26 h-26",
};

const TRANSLATE_TEXT = {
  title: {
    default: "My Projects",
    spanish: "Mis Proyectos",
  },
  webLink: {
    default: "Go to web",
    spanish: "Ir a la web",
  },
  githubLink: {
    default: "Repository",
    spanish: "Repositorio",
  },
  noLinks: {
    default: "No available links",
    spanish: "Sin links disponibles",
  },
};

const BACKGROUND =
  "https://img.freepik.com/free-photo/turned-gray-laptop-computer_400718-47.jpg?w=900&t=st=1681148726~exp=1681149326~hmac=5b9a339affba7612b935f8f032918d367f97ef524b7472c5ccfa18921bd7ebdf";

//prettier-ignore
const PROYECTS = [
  {
    icon: <KamaiIcon className={STYLES.kamai} />,
    title: { default: "Kamai — Web Systems", spanish: "Kamai — Sistemas Web" },
    links: {
      web: "https://www.kamai.com.ar",
    },
    text: {
      default: "At Kamai, we build fully customized web systems down to the finest detail, regardless of their size and requirements. I take pride in having founded this start-up and in continuing working tirelessly for it's success. Today we provide systems of excelent quality to multiple clients and we never stop expanding into new markets.",
      spanish: "En Kamai construimos sistemas web completos y personalizados hasta el último detalle, de cualquier tamaño y requerimientos. Me enorgullece haber comenzado este emprendimiento y seguir trabajando sin descanso para su éxito. Hoy brindamos sistemas de excelente calidad a múltiples clientes y siempre continuamos expandiéndonos a nuevos mercados.",
    },
  },
  {
    icon: <p className={STYLES.chqp}>chqp</p>,
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
    icon: <BsClock className={STYLES.timeHUD} />,
    title: "Time HUD",
    links: {
      web: "https://slardptor.github.io/time_hud/",
      github: "https://github.com/SlarDptor/time_hud",
    },
    text: {
      default: "An application I made for myself, to both keep track of how much time I spend in certain ambits and to set myself time objectives and limits on said ambits. As it's for self-use only, I built it in just a few weeks by recycling code and design from other projects.",
      spanish: "Una aplicación que hice para mí mismo, tanto para mantener un registro de cuánto tiempo gasto en ciertos ámbitos como también para establecerme objectivos y límites en dichos ámbitos. Como es para uso propio, la construí en sólo algunas semanas reciclando código y diseños de otros proyectos.",
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
    icon: <p className={STYLES.wd}><GiSwordSpade className={STYLES.wdIcon} /></p>,
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
