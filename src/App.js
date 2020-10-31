import "./App.css";
import styled from "styled-components";
import { getRoutesComponents } from "services/routes/getRoutesComponents";

function App() {
  const routesComponents = getRoutesComponents();
  return (
    <Wrapper className="App">
      <div className="container">{routesComponents}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    position: relative;
  }

  .slide {
    position: absolute;
    left: 0;
    right: 0;
  }

  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter-active {
    transform: translateX(0%);
    transition: all 1.5s linear;
  }
  .slide-exit {
    transform: translateX(0%);
  }
  .slide-exit-active {
    transform: translateX(-100%);
    transition: all 1.5s linear;
  }
`;

export default App;
