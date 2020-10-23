import { languages } from "./languages";
import englishSource from "./englishSource.json";

export function t(key, params) {
  const language = languages.English;
  if(language === languages.English){
    return englishSource[key];
  }
}
