import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Rocket from "./components/Rocket/Rocket";
import Rockets from "./components/RocketsList/RocketsList";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Rockets} />
          <Route path="/rocket/:id" exaсt component={Rocket} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
