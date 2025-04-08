import axios from 'axios';
import React, { useState, useEffect } from "react";
import requests from "../api/request";

const ExceptionMovie = () => {
  const [movies, setMovies] = useState([]);

  const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: "",
      language: "ko-KR",
    },
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await instance.get(requests.fetchNowPlaying);
        setMovies(response.data.results);
      } catch (error) {
        console.error("영화 데이터를 불러오는 데 실패했습니다:", error);
      }
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

export default ExceptionMovie;
