import { languages } from "./languages";
import englishSource from "./englishSource.json";

export function t(key, params) {
  const language = languages.English;
  let text;
  if(language === languages.English){
    text = englishSource[key];
  }
  if(!params){
    return text;
  }

  const paramsArray = Object.entries(params);
  for(const [key, value] of paramsArray){
    console.log({ key, value , 12: `{{${key}}}`})
    text = text.replace(`{{${key}}}`, value);
  }

  return text;

}
