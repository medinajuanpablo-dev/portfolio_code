import React from "react";

import { useIndicatedStyles } from "@static/tailwind";

function SectionTitle({ children, customStyles, withMargin, inverted }) {
  //prettier-ignore
  const getActiveStyles = useIndicatedStyles(INDICATORS, DIRECTED_STYLES, { customDirSty: customStyles });

  const styles = getActiveStyles({ withMargin, inverted });

  return (
    <>
      <p className={styles.title}>{children}</p>
      <div className={styles.separator} />
    </>
  );
}

//prettier-ignore
const DIRECTED_STYLES = {
  title: "text-center text-slate-600 text-strong text-3.5xl | sm:text-4xl | lg:text-4.5xl || iv<text-slate-200>",
  separator: "mt-8 w-30 border-t-2 border-sky-500 mx-auto || mb4<mb-4> mb8<mb-8>",
};

//prettier-ignore
const INDICATORS = [
  { key: "mb-4", directive: "mb4", condition: (p) => p.withMargin == "mb-4" },
  { key: "mb-8", directive: "mb8", condition: (p) => p.withMargin == "mb-8" },
  { key: "inverted", directive: "iv", condition: (p) => p.inverted },  
];

export default SectionTitle;
