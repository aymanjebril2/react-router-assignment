import listData from "../service/listData";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
function Planets(props) {
  const [list, setList] = useState([]);

  const fatchData = async () => {
    const data = await listData();
    setList(data.data.planets);
  };

  useEffect(() => {
    fatchData();
  }, []);
  // console.log(list);

  return (
    <div>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={{
                  pathname: "/PlanetDetail",
                  state: {
                    name: item.name,
                    color: item.color,
                    moon: item.num_moons,
                  },
                }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Planets;
