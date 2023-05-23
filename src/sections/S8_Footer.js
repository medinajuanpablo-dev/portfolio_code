import React from "react";

import pckg from "../../package.json";

function Footer({ lang }) {
  return <p className={STYLES.ct}>{TRANSLATE_TEXT.text[lang]}</p>;
}

//prettier-ignore
const STYLES = {
  ct: "bg-slate-200 text-slate-600 text-opacity-90 text-very-light text-italic text-center py-4 | sm:text-xl | md:py-2 md:text-lg",
};

const TRANSLATE_TEXT = {
  text: {
    default: `Thank you for visiting. Current version is ${pckg.version}.`,
    spanish: `Gracias por visitar. La versión actual es ${pckg.version}.`,
  },
};

export default Footer;
