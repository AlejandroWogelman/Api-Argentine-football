import { createContext, ReactNode, useState } from "react";
import { contextLanguages, languages } from "../interfaces/language";

export interface provider {
  children: ReactNode;
}

export const LanguageContext = createContext<contextLanguages | null>(null);

let initialLanguage = localStorage.getItem("language") || "es";

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
  pr: {
    headerTitle: "API de futebol ARGENTINO",
    description: [
      [
        "Lista de times",
        "Você poderá consultar através de um GET todos os times que compõem a Primeira Divisão do Futebol Argentino.",
      ],
      [
        "Informações da Equipe",
        "Você poderá consultar através de um GET a equipe e os dados da equipe.",
      ],
    ],
    name: "portugues",
  },
};

export const LanguageProvider = ({ children }: provider) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language as keyof languages]);

  const handleLanguage = (val: string) => {
    if (val === "es") {
      setTexts(translations.es);
      setLanguage("es");
      localStorage.setItem("language", "es");
    }
    if (val === "en") {
      setTexts(translations.en);
      setLanguage("en");
      localStorage.setItem("language", "en");
    }
    if (val === "pr") {
      setTexts(translations.pr);
      setLanguage("pr");
      localStorage.setItem("language", "pr");
    }
  };

  const data: contextLanguages = { texts: texts, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
