import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b4e67c899552c8e3da270042e10c7cea",
    language: "ko-KR",
  },
});

export default instance;
