type Movie = {
  genre_ids: number[];
  id: number;
  poster_path: string;
  original_title: string;
  title: string;
  overview: string;
};

type TrendingMoviesResponse = {
  results: Movie[];
};

export default defineEventHandler((event): TrendingMoviesResponse => {
  const result: any = $fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NUXT_THEMOVIEDB_KEY}`
  );

  return result;
});
