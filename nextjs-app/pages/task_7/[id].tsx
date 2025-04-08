import { useRouter } from "next/router";
import movies from "./data/movies";

export default function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <p>영화 정보를 찾을 수 없습니다.</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>개봉일: {movie.release_date}</p>
    </div>
  );
}
