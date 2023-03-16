import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import world1 from "../images/icons8-world-cup-96.png";
import es from "../images/es.png";
import en from "../images/en.png";
import pr from "../images/pr.png";

import "./header.css";

export const Header = () => {
  const context = useContext(LanguageContext);
  const { texts, handleLanguage } = context || {};

  const changeLanguage = handleLanguage ? handleLanguage : () => {};

  return (
    <>
      <header className="header">
        <h1>{texts?.headerTitle}</h1>
      </header>

      <div className="languagesOptions">
        <button type="button" onClick={() => changeLanguage("es")}>
          <img src={es} alt="español" />
        </button>
        <button type="button" onClick={() => changeLanguage("en")}>
          <img src={en} alt="english" />
        </button>
        <button type="button" onClick={() => changeLanguage("pr")}>
          <img src={pr} alt="portugues" />
        </button>
      </div>
    </>
  );
};
