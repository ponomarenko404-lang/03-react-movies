import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesHttpResponse {
  results: Movie[];
}

async function resMovies(query: string): Promise<Movie[]> {
  const key = import.meta.env.VITE_TMDB_TOKEN;

  const res = await axios.get<MoviesHttpResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: query,
      },
      headers: {
        Authorization: `Bearer ${key}`,
      },
    },
  );
  return res.data.results;
}

export default resMovies;
