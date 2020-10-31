import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { TopBar } from "screens/layout/topBar";
import { routes } from "./routes";


export const getRoutesComponents = () => {
  const routesComponents = routes.map(({ path, Component }) => (
    <Route key={path} exact path={path}>
      {({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={1500}
          classNames="slide"
          unmountOnExit
        >
          <div className="slide">
              <TopBar />
            <Component />
          </div>
        </CSSTransition>
      )}
    </Route>
  ));
  return routesComponents;
};