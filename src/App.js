import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import RandomPlanet from "./components/RandomPlanet";
import PlanetDetail from "./components/PlanetDetail";

function App() {
  return (
    <div>
      <header>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/RandomPlane">RandomPlane</Link>
          </li>
        </nav>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/planets" component={Planets} />
          <Route path="/RandomPlane" component={RandomPlanet} />
          <Route path="/PlanetDetail " component={PlanetDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
