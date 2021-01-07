import "./App.css";
import styled from "styled-components";
import { getRoutesComponents } from "services/routes/getRoutesComponents";
import { Switch, withRouter, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedSwitch = withRouter(({ location }) => {
  const routesComponents = getRoutesComponents();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>{routesComponents}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

function App() {
  return (
    <Wrapper className="App">
      <BrowserRouter>
        <AnimatedSwitch />
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    position: relative;
  }

  .slide-enter,
  .slide-exit {
    transition: transform 1000ms ease-out;
  }

  .slide-enter {
    transform: translateX(100%);
  }

  .slide-enter.slide-enter-active {
    transform: translateX(0%);
  }

  .slide-exit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(0%);
  }

  .slide-exit-active {
    transform: translateX(-100%);
  }
`;

export default App;
