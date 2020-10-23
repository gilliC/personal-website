import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { ScreenHome } from "./screens/home/screenHome";
import { ScreenPageNotFound } from "screens/pageNotFound/screenPageNotFound";
import { TopBar } from "screens/layout/topBar";
import { BackgroundGradientRow } from "common/backgroundGradientRow";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundGradientRow />
      <Switch>
        <Route path="/" exact component={ScreenHome} />
        <Route component={ScreenPageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
