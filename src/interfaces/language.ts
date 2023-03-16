export interface contextLanguages {
  texts: languagesTexts;
  handleLanguage: (val: string) => void;
}

export interface languages {
  es: languagesTexts;
  en: languagesTexts;
  pr: languagesTexts;
}

interface languagesTexts {
  headerTitle: string;
  name: string;
  description: [string, string][];
}
