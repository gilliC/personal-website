import { ScreenAbout } from "screens/about/screenAbout";
import { ScreenContact } from "screens/contact/screenContact";
import { ScreenHome } from "screens/home/screenHome";
import { ScreenPageNotFound } from "screens/pageNotFound/screenPageNotFound";

export const routes = [
  { path: "/", name: "Home", Component: ScreenHome },
  { path: "/about", name: "About", Component: ScreenAbout },
  { path: "/contact", name: "Contact", Component: ScreenContact },
  { name: "NoMatch", Component: ScreenPageNotFound },
];
