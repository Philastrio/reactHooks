import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.lt/api/v2/list_movies.json"
  });
  console.log(
    `Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading" : "로딩완료"}</h2>
      <button onClick={refetch}>다시가져오기</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
