import React from "react";

import pckg from "../../package.json";

function Footer({ lang }) {
  return <p className={STYLES.ct}>{TRANSLATE_TEXT.text[lang]}</p>;
}

//prettier-ignore
const STYLES = {
  ct: "bg-slate-200 text-slate-700 text-light text-italic text-center py-4 | sm:text-xl | md:text-very-light md:py-2 md:text-lg | lg:text-xl",
};

const TRANSLATE_TEXT = {
  text: {
    default: (
      <>This is the portfolio's end. Current version is {pckg.version}.</>
    ),
    spanish: (
      <>Aquí termina el portfolio. La versión actual es {pckg.version}.</>
    ),
  },
};

export default Footer;
