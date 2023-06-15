import React from "react";
import { Element as ScrollableContainer } from "react-scroll";
import { MdLocationOn } from "react-icons/md";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import { SectionTitle } from "@common/index";
import { useBreakpoint } from "@static/react";

function Contact({ lang }) {
  const bp = useBreakpoint();

  const content = <></>;

  return bp.isDesktop() ? (
    <ScrollableContainer name="section-contact" className={STYLES.wrapper}>
      <div className={STYLES.contentBox}>
        <SectionTitle>{TRANSLATE_TEXT.title[lang]}</SectionTitle>

        <p className={STYLES.text}>{TRANSLATE_TEXT.text[lang]}</p>

        <div className={STYLES.dataRow}>
          <p className={STYLES.contact}>
            <BsEnvelopeFill className={STYLES.contactIcon} />{" "}
            <a
              href="mailto:medinajp95@gmail.com"
              className={STYLES.contactLink}
            >
              medinajp95@gmail.com
            </a>
          </p>
          <p className={STYLES.contact}>
            <IoLogoGithub className={STYLES.contactIcon} />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={STYLES.contactLink}
              href="https://github.com/SlarDptor"
            >
              @SlarDptor
            </a>
          </p>
        </div>
        <div className={STYLES.dataRow}>
          <p className={STYLES.contact}>
            <IoLogoLinkedin className={STYLES.contactIcon} />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={STYLES.contactLink}
              href="https://www.linkedin.com/in/juan-pablo-medina-249799196/"
            >
              @Juan Pablo Medina
            </a>
          </p>
          <p className={STYLES.contact}>
            <MdLocationOn className={STYLES.contactIcon} /> Jujuy, Argentina
          </p>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${DESKTOP_IMG})` }}
        className={STYLES.sideImage}
      />
    </ScrollableContainer>
  ) : (
    <ScrollableContainer name="section-contact" className={STYLES.ct}>
      <SectionTitle>{TRANSLATE_TEXT.title[lang]}</SectionTitle>

      <p className={STYLES.text}>{TRANSLATE_TEXT.text[lang]}</p>

      <p className={STYLES.contact}>
        <BsEnvelopeFill className={STYLES.contactIcon} />{" "}
        <a href="mailto:medinajp95@gmail.com" className={STYLES.contactLink}>
          medinajp95@gmail.com
        </a>
      </p>
      <p className={STYLES.contact}>
        <IoLogoLinkedin className={STYLES.contactIcon} />{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={STYLES.contactLink}
          href="https://www.linkedin.com/in/juan-pablo-medina-249799196/"
        >
          @Juan Pablo Medina
        </a>
      </p>
      <p className={STYLES.contact}>
        <IoLogoGithub className={STYLES.contactIcon} />{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={STYLES.contactLink}
          href="https://github.com/SlarDptor"
        >
          @SlarDptor
        </a>
      </p>
      <p className={STYLES.contact}>
        <MdLocationOn className={STYLES.contactIcon} /> Jujuy, Argentina
      </p>
    </ScrollableContainer>
  );
}

//prettier-ignore
const STYLES = {
  ct: "relative -mt-6 pb-10 bg-slate-150 | sm:px-10 sm:-mt-12 | md:mt-0",

  text: "mt-6 text-slate-700 text-very-light text-xl text-center mb-8 w-87 mx-auto | sm:w-120 sm:mt-8 sm:mb-10 sm:text-1.5xl | md:w-auto md:text-xl | lg:px-8",

  contact: "mt-6 text-slate-700 text-xl flex justify-center items-center | sm:mt-8 sm:text-2xl | md:text-xl md:mt-6 | lg:mx-4 lg:mt-0",
  contactIcon: "text-3xl text-sky-600 mr-3 | sm:text-4xl sm:mr-4 | md:text-3xl md:mr-3",
  contactLink: "text-indigo-700 border-b-1 border-opacity-50 border-indigo-700",

  //Desktop only

  wrapper: "flex",
  dataRow: "| lg:flex lg:justify-center lg:mt-8",
  sideImage: "grow bg-right bg-cover",
  contentBox: "bg-slate-100 w-7/12 shrink-0 px-12 py-10 | lg:px-4 lg:w-6/12 lg:pt-14 lg:pb-16",
};

const TRANSLATE_TEXT = {
  title: {
    default: "Contact Me",
    spanish: "Contáctame",
  },

  text: {
    default:
      "To contact me please send me an email or leave me a message at LinkedIn.",
    spanish:
      "Para contactarme por favor envíame un correo electrónico o déjame un mensaje en LinkedIn.",
  },
};

const DESKTOP_IMG =
  "https://img.freepik.com/free-photo/cropped-photo-young-man-white-shirt-holding-smartphone-while-resting-after-paperwork_171337-9864.jpg?w=900&t=st=1682774217~exp=1682774817~hmac=1d00d3bf92ce8bce05172bfe7448bcdf849dcb3357e8d043e1fe062f0498516f";

export default Contact;
