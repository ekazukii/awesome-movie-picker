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
  const query = useQuery(event);
  console.log(Number(query.rank) / 10);

  const opt = {
    "with_runtime.gte": query.min,
    "with_runtime.lte": query.max,
    with_watch_providers: query.providers,
    "vote_average.gte": Number(query.rank) / 10,
    with_genres: query.genders,
  };

  console.log(opt);

  const result: any = $fetch("https://api.themoviedb.org/3/discover/movie", {
    params: {
      api_key: process.env.NUXT_THEMOVIEDB_KEY,
      language: "fr-FR",
      region: "FR",
      watch_region: "FR",
      sort_by: "popularity.desc",
      include_adult: false,
      page: 1,
      "vote_count.gte": 40,
      ...opt,
    },
  });

  return result;
});
