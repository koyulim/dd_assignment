import axios from "../api/axios";
import React, { useState } from "react";
import requests from "../api/request";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);

  const Movies = async () => {
    const response = await axios.get(requests.fetchNowPlaying);
    setMovies(response.data.results);
  };

  return (
    <div>
      <h1>인기 영화 목록</h1>
      <div>
        <button onClick={Movies}>영화 목록 불러오기</button>
      </div>
      <br />
      <div>
        {movies.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieApp;
