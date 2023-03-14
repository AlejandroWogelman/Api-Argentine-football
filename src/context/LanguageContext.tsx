import { createContext, ReactNode, useState } from "react";
import { contextLanguages, languages } from "../interfaces/language";

export interface provider {
  children: ReactNode;
}

export const LanguageContext = createContext<contextLanguages | null>(null);

const initialLanguage: string = "es";
const translations: languages = {
  es: {
    headerTitle: "API del fútbol ARGENTINO",
    description: [
      [
        "Lista de equipos",
        "Vas a poder consultar por medio de un GET todos los equipos que conforman la Primera División del Fútbol Argentino.",
      ],
      [
        "Información de un Equipo",
        "Vas a poder consultar por medio de un GET la plantilla y datos del Equipo.",
      ],
    ],
    name: "español",
  },
  en: {
    headerTitle: "ARGENTINE football API",
    name: "ingles",
    description: [
      [
        "ARGENTINE football API",
        "You will be able to consult through a GET all the teams that make up the First Division of Argentine Soccer.",
      ],
      [
        "Team Information",
        "You will be able to consult through a GET the team's staff and data.",
      ],
    ],
  },
};

export const LanguageProvider = ({ children }: provider) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language as keyof languages]);

  const handleLanguage = (val: string) => {
    if (val === "es") {
      setTexts(translations.es);
      setLanguage("es");
    }
    if (val === "en") {
      setTexts(translations.en);
      setLanguage("en");
    }
  };

  const data: contextLanguages = { texts: texts, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
