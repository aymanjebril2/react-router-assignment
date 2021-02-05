import React from "react";
import axios from "axios";

async function listData() {
  const URL1 = "https://wdi-nyc-planets-api.herokuapp.com/planets";
  const response = await axios.get(URL1).then((res) => {
    return res;
  });
  return response;
}

export default listData;
