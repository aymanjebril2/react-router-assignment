import listData from "../service/listData";
import randomData from "../service/randomData";
function Home(props) {
  return (
    <div>
      {console.log(listData())}
      {console.log(randomData())}
      <h1>Home</h1>
    </div>
  );
}
export default Home;
