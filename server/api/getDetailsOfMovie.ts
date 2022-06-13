export default defineEventHandler((event): any => {
  const query = useQuery(event);
  if (!query.id) return;

  const result = $fetch(
    `https://api.themoviedb.org/3/movie/${query.id}?api_key=${
      process.env.NUXT_THEMOVIEDB_KEY
    }${query.region ? `&language=${query.region}` : ""}`
  );

  return result;
});
