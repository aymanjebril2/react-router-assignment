import axios from "axios";
async function randomData() {
  const URL2 = "https://wdi-nyc-planets-api.herokuapp.com/planets/random";
  const response1 = await axios.get(URL2).then((res1) => {
    return res1;
  });
  return response1;
}
export default randomData;
