import "./styles.css";
import { Switch, Route } from "react-router-dom";
import { Header } from "./header.js";
import { HomePage } from "./homepage.js";

import { Create } from "./create";
import AssignMentor from "./mentorassign";
import EditMentor from "./editmentor.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/assign">
          <AssignMentor />
        </Route>
        <Route path="/edit">
          <EditMentor />
        </Route>

        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </div>
  );
}
