import listData from "../service/listData";
import { useState, useEffect } from "react";
import PlanetDetail from "./PlanetDetail";
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
        {list.map((item, index) => {
          return <PlanetDetail {...item} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default Planets;
