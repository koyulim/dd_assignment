import axios from "./axios";
import React, { useState, useEffect } from "react";
import requests from "./request";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const TsMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<{ results: Movie[] }>(
          requests.fetchNowPlaying
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("영화 데이터를 불러오는 데 실패했습니다:", error);
      }
    };

    fetchMovies();

    return () => {
      console.log("TsMovies 컴포넌트가 언마운트되었습니다.");
    };
  }, []);

  return (
    <div>
      <h1>인기 영화 목록</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TsMovies;
