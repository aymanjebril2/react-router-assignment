import "./App.css";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Planets from "./components/Planets";
import RandomPlanet from "./components/RandomPlanet";

function App() {
  return (
    <div>
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

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/planets" component={Planets} />
        <Route path="/RandomPlane" component={RandomPlanet} />
      </main>
    </div>
  );
}

export default App;
