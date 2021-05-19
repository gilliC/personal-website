import { getRoutesComponents } from "./getRoutesComponents";
import { Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ANIMATION_MS } from "../../App";

export const AnimatedSwitch = withRouter(({ location }) => {
  const routesComponents = getRoutesComponents();
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.key} classNames="slide" timeout={ANIMATION_MS}>
        <Switch location={location}>{routesComponents}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});
