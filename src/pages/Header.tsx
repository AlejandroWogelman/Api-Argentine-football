import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import world1 from "../images/icons8-world-cup-96.png";

import "./header.css";

export const Header = () => {
  const context = useContext(LanguageContext);
  const { texts } = context || {};

  return (
    <div className="header">
      <h1>{texts?.headerTitle}</h1>

      <div className="cups">
        <img src={world1} alt="world-cup" width="50px" />
        <img src={world1} alt="world-cup" width="50px" />
        <img src={world1} alt="world-cup" width="50px" />
      </div>
    </div>
  );
};
