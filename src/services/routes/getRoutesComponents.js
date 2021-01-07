import { Route } from "react-router-dom";
import { TopBar } from "screens/layout/topBar";
import { routes } from "./routes";

export const getRoutesComponents = () => {
  const routesComponents = routes.map(({ path, Component }) => (
    <Route key={path} exact path={path}>
      {({ match }) => (
          <div className="slide">
            <TopBar />
            <Component />
          </div>
      )}
    </Route>
  ));
  return routesComponents;
};
