import React, { useState } from "react";
import Child from "./child";
import axios from "../api/axios";
import requests from "../api/request";

const Parent = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(requests.fetchNowPlaying);
    setMovies(response.data.results);
  };

  return (
    <div>
      <h1>인기 영화 목록</h1>
      <div>
        <button onClick={fetchMovies}>영화 목록 불러오기</button>
      </div>
      <br/>
      <div>
        {movies.map((movie) => (
          <Child
            key={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          ></Child>
        ))}
      </div>
    </div>
  );
};

export default Parent;
