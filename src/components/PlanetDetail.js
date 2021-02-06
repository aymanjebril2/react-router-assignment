function PlanetDetail(props) {
  return (
    <div className="">
      <h3>
        Planet <span>{props.location.state.name}</span>{" "}
      </h3>
      <p>
        Color: <span>{props.location.state.color}</span>
      </p>
      <p>
        {" "}
        Number of Moons : <span>{props.location.state.num_moons}</span>
      </p>
    </div>
  );
}
export default PlanetDetail;
