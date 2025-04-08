import Link from "next/link";
import products from "./task_5/data/products";
import movies from "./task_7/data/movies";

export default function Home() {
  return (
    <div>
      <div>
        <h1>task_5</h1>
        <h2>제품 목록</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/task_5/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>task_7</h1>
        <h2>영화 목록</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link href={`/task_7/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
