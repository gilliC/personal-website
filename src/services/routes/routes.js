import { ScreenAbout } from "screens/about/screenAbout";
import { ScreenArticles } from "screens/articles/screenArticles";
import { ScreenContact } from "screens/contact/screenContact";
import { ScreenHome } from "screens/home/screenHome";
import { ScreenPageNotFound } from "screens/pageNotFound/screenPageNotFound";

export const routes = [
  { path: "/", name: "Home", Component: ScreenHome },
  { path: "/about", name: "About", Component: ScreenAbout },
  { path: "/contact", name: "Contact", Component: ScreenContact },
  { path: "/articles", name: "Articles", Component: ScreenArticles },
  { name: "NoMatch", Component: ScreenPageNotFound },
];
