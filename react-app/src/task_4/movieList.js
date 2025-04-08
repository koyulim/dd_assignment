import axios from "../api/axios";
import React, { useState, useEffect } from "react";
import requests from "../api/request";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(requests.fetchNowPlaying);
      setMovies(response.data.results);
    };

    fetchMovies();
    return () => {
      console.log("MovieApp 컴포넌트가 언마운트되었습니다.");
    };
  }, []);

  return (
    <div>
      <h1>인기 영화 목록</h1>
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

export default MovieList;
