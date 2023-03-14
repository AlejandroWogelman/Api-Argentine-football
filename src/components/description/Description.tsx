import "./description.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
export const Description = () => {
  const { texts } = useContext(LanguageContext) || {};

  return (
    <div className="app_description">
      <h2>{texts?.headerTitle}</h2>
      <div className="description__cards">
        {texts?.description.map(([title, paragraph]) => {
          return (
            <article>
              <h3>{title}</h3>
              <p>{paragraph}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};
