import { useState, useEffect } from "react";
import randomData from "../service/randomData";

function RandomPlanet(props) {
  const [random, setRandom] = useState([]);
  const getRandom = async () => {
    const data = await randomData();
    setRandom(data.data.planet);
  };
  useEffect(() => {
    getRandom();
  }, []);
  console.log(random);
  return (
    <div>
      <button onClick={getRandom}>Get Random Planet</button>
      {random ? (
        <ul>
          <li>
            <h3>
              Planet <span>{random.name}</span>{" "}
            </h3>
            <p>
              Color: <span>{random.color}</span>
            </p>
            <p>
              {" "}
              Number of Moons : <span>{random.num_moons}</span>
            </p>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default RandomPlanet;
