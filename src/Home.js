import React from "react";

import Top from "./sections/S0_Top";
import Cover from "./sections/S1_Cover";
import Experience from "./sections/S2_Experience";
import Projects from "./sections/S3_Projects";
import Quote from "./sections/S4_Quote";
import Skills from "./sections/S5_Skills";
import Summary from "./sections/S6_Summary";
import Contact from "./sections/S7_Contact";
import Footer from "./sections/S8_Footer";

function Home() {
  const [lang, setLang] = React.useState("default");

  return (
    <>
      <Top {...{ lang, setLang }} />
      <Cover lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Quote lang={lang} />
      <Skills lang={lang} />
      <Summary lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

export default Home;
