import React from "react";
import { BiArrowToTop } from "react-icons/bi";
import { BsPersonLinesFill, BsCodeSlash, BsEnvelopeFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { IoMenu, IoClose } from "react-icons/io5";
import { animateScroll, scroller } from "react-scroll";

import { useIndicatedStyles } from "@static/tailwind";
import { DevIcon } from "@common/index";
import {
  useBordersVisibility,
  useBreakpoint,
  useFocusSensor,
  useSwipeDetector,
} from "@static/react";

import { LANGS } from "@static/values/config";

function Top({ lang, setLang }) {
  const bp = useBreakpoint();
  const getActiveStyles = useIndicatedStyles(INDICATORS, DIRECTED_STYLES);

  const sidebarRef = React.useRef();
  const sidebarFocus = useFocusSensor(sidebarRef);
  const { direction, distance } = useSwipeDetector();
  const visible = useBordersVisibility({
    pixelsForVisibleTop: 10,
    pixelsForVisibleBottom: 50,
  });

  const arrowRef = React.useRef();

  React.useEffect(() => {
    //Blur the arrow button when reaching the top
    if (visible.top) arrowRef.current.blur();
  }, [visible.top]);

  React.useEffect(() => {
    if (distance > 170) sidebarFocus.setFocused(direction == "left");
  }, [direction, distance]);

  function goToTop() {
    if (visible.top) return;
    animateScroll.scrollToTop({ delay: 0, duration: 1000 });
  }

  function onLinkClick(to) {
    scroller.scrollTo(to, {
      smooth: true,
      duration: 1000,
      offset: -50,
    });
    sidebarFocus.setFocused(false);
  }

  const TogglerIcon = sidebarFocus.focused ? IoClose : IoMenu;
  const styles = getActiveStyles({ visible, sidebarFocus });

  return (
    <div className={styles.ct}>
      <div onClick={goToTop} className={styles.logo}>
        <DevIcon className={styles.logoIcon} />
        <span className={styles.logoName}>Juan Pablo</span>
        <span className={styles.logoWeb}>Web </span>
        <span className={styles.logoDev}> Dev</span>
        <span className={styles.logoLoper}>eloper</span>
      </div>

      {bp.isDesktop() ? (
        <div className={styles.topRight}>
          {LINKS.map((ql) => (
            <button
              onClick={() => onLinkClick(`section-${ql.section}`)}
              className={styles.topLink}
            >
              <ql.Icon className={styles.topLinkIcon} />
              {ql.text[lang]}
            </button>
          ))}

          <div className={styles.topFlags}>
            {Object.keys(LANGS).map((langKey) => (
              <Flag
                key={langKey}
                emoji={LANGS[langKey].emoji}
                langKey={langKey}
                {...{ lang, setLang, visible, bp }}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <button
            onClick={() => sidebarFocus.setFocused((focused) => !focused)}
          >
            <TogglerIcon className={styles.toggler} />
          </button>

          <div ref={sidebarRef} className={styles.sidebar}>
            <p className={styles.sidebarTitle}>
              {TRANSLATE_TEXT.scrollTo[lang]}
            </p>

            {LINKS.map((ql) => (
              <button
                onClick={() => onLinkClick(`section-${ql.section}`)}
                className={styles.sideLink}
              >
                {ql.text[lang]}
                <ql.Icon className={styles.sideLinkIcon} />
              </button>
            ))}

            <p className={styles.sidebarLang}>
              {TRANSLATE_TEXT.language[lang]}
            </p>

            {Object.keys(LANGS).map((langKey) => (
              <Flag
                key={langKey}
                emoji={LANGS[langKey].emoji}
                langKey={langKey}
                {...{ lang, setLang, visible, bp }}
              />
            ))}
          </div>
        </>
      )}

      <button ref={arrowRef} onClick={goToTop} className={styles.arrow}>
        <BiArrowToTop className={styles.arrowIcon} />
      </button>
    </div>
  );
}

//prettier-ignore
const DIRECTED_STYLES = {
  ct: "z-60 fixed w-full shadow-md flex justify-between px-4 py-3 items-center text-ptserif-700 transition duration-1000 | sm:py-4 | md:py-2 | lg:px-6 || nt<bg-slate-200>",
  
  logo: "relative flex items-center text-2xl text-strong tracking-wider cursor-pointer | sm:text-2.5xl | md:text-xl | lg:text-2xl",
  logoIcon: "w-8 h-8 mr-3 shrink-0 text-slate-200 transition duration-1000 | sm:w-10 sm:h-10 | md:w-6 md:h-6 | lg:w-8 lg:h-8 || nt<text-slate-600>",
  logoName: "absolute text-slate-200 text-opacity-0 left-11 transition duration-1000 | sm:left-13 | md:left-9 | lg:left-11 || nt<text-slate-600'text-opacity-100>",
  logoWeb: "text-slate-200 transition duration-1000 || nt<text-opacity-0>",
  logoDev: "ml-2 text-slate-200 transition duration-1000 || nt<text-sky-600'translate-x-19'sm:translate-x-22'md:translate-x-16'lg:translate-x-19> ",
  logoLoper: "text-slate-200 transition duration-1000 || nt<text-opacity-0>",

  toggler: "text-4xl text-slate-300 transition duration-1000 || nt<text-slate-600>",

  sidebar: "fixed z-100 flex flex-col shadowed-box top-15 right-0 pl-4 pr-3 pt-6 h-screen w-6/12 bg-slate-200 transition duration-500 translate-x-100 rounded-l-md || sbo<translate-x-0>",
  sidebarTitle: "text-center text-base text-sky-600",
  sidebarLang: "text-center text-base text-sky-600 mt-8 mb-2",

  sideLink: "flex justify-between mt-6 border-b-1 border-slate-400 border-opacity-80 pb-1 text-lg items-center text-light text-slate-600 cursor-pointer hover:text-sky-500 focus:text-sky-500 transition duration-300",
  sideLinkIcon: "mr-2 mt-1px text-1.5xl",

  arrow: "bg-sky-500 bg-opacity-80 text-slate-100 rounded-sm items-center p-1 opacity-0 cursor-default border-2 border-sky-400 border-opacity-0 transition-all duration-1000 translate-x-20 hover:bg-sky-500 focus:border-opacity-100 fixed bottom-4 right-4 | sm:bottom-6 sm:right-6 || bo<-translate-y-12'md:translate-y-0> nt<opacity-1'cursor-pointer'translate-x-0>",
  arrowIcon: "text-2.5xl | sm:text-3.5xl",

  //Desktop only

  topRight: "flex items-center",
  topLink: "flex justify-center items-center text-light text-slate-300 ml-4 text-sm cursor-pointer hover:text-sky-500 focus:text-sky-500 transition duration-300 | lg:text-lg lg:ml-6 || nt<text-slate-600>",
  topLinkIcon: "mr-1 mt-1px | lg:mr-2",
  topFlags: "flex | md:ml-4 md:border-l-1 md:border-slate-300 md:border-opacity-50 | lg:ml-6 lg:pl-2 || nt<md:border-slate-600>",
};

const INDICATORS = [
  { key: "notTop", directive: "nt", condition: (p) => !p.visible.top },
  { key: "bottom", directive: "bo", condition: (p) => p.visible.bottom },
  {
    key: "sidebarOpened",
    directive: "sbo",
    condition: (p) => p.sidebarFocus.focused,
  },
];

function Flag({ emoji, langKey, lang, visible, setLang, bp }) {
  const getActiveStyles = useIndicatedStyles(FLAG_INDICATORS, FLAG_DIR_STY);

  const styles = getActiveStyles({ lang, visible, langKey });

  return (
    <button onClick={() => setLang(langKey)} className={styles.ct}>
      {FLAG_LANGUAGE[langKey]}
      <span className={styles.emoji}>{emoji}</span>
    </button>
  );
}

const FLAG_DIR_STY = {
  ct: "mt-2 leading-tight text-center text-slate-600 flex justify-between items-center text-lg border-1 pl-3 pr-2 rounded-md py-1 border-slate-300 transition duration-500 cursor-pointer | md:rounded-none md:border-transparent md:border-x-0 md:border-t-0 md:p-0 md:justify-center md:ml-2 md:text-sm md:mt-0 md:text-slate-300 md:border-b-1 md:ml-2 | lg:border-b-2 lg:ml-4 lg:text-lg lg:leading-normal || nt<text-slate-600'md:text-slate-600> se<border-sky-500'md:border-sky-500'border-opacity-100'md:border-opacity-80> ",
  emoji:
    "text-2xl mr-2 | md:mr-0 md:ml-1 md:text-lg md:w-auto | lg:text-xl lg:ml-2",
};

const FLAG_INDICATORS = [
  { key: "notTop", directive: "nt", condition: (p) => !p.visible.top },
  { key: "selected", directive: "se", condition: (p) => p.lang == p.langKey },
];

const FLAG_LANGUAGE = {
  default: "English",
  spanish: "Español",
};

const LINKS = [
  {
    text: { default: "Experience", spanish: "Experiencia" },
    Icon: BsPersonLinesFill,
    section: "experience",
  },
  {
    text: { default: "Jobs & Projects", spanish: "Trabajos y Proy." },
    Icon: BsCodeSlash,
    section: "projects",
  },
  {
    text: { default: "Skills", spanish: "Habilidades" },
    Icon: GiSkills,
    section: "skills",
  },
  {
    text: { default: "Contact", spanish: "Contacto" },
    Icon: BsEnvelopeFill,
    section: "contact",
  },
];

const TRANSLATE_TEXT = {
  scrollTo: {
    default: "Scroll to...",
    spanish: "Ir a sección...",
  },
  language: {
    default: "Language",
    spanish: "Idioma",
  },
};

export default Top;
