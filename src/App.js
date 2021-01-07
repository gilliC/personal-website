import "./App.css";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { AnimatedSwitch } from "services/routes/animatedSwitch";

function App() {
  return (
    <Wrapper className="App">
      <BrowserRouter>
        <AnimatedSwitch />
      </BrowserRouter>
    </Wrapper>
  );
}

export const ANIMATION_MS = 2000;

const Wrapper = styled.div`
  .container {
    position: relative;
  }

  .slide-enter,
  .slide-exit {
  transition: transform ${ANIMATION_MS}ms ease-in-out;
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
