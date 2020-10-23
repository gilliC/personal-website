import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { ScreenHome } from "./screens/home/screenHome";
import { ScreenPageNotFound } from "screens/pageNotFound/screenPageNotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ScreenHome} />
        <Route component={ScreenPageNotFound} />

      </Switch>
    </div>
  );
}

export default App;
