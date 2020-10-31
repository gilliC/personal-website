import { ScreenHome } from "screens/home/screenHome";
import { ScreenPageNotFound } from "screens/pageNotFound/screenPageNotFound";

export const routes = [
  { path: "/", name: "Home", Component: ScreenHome },
  { path: "/about", name: "noMatch", Component: ScreenPageNotFound },
  // { path: '/contact', name: 'Contact', Component: Contact },
];
