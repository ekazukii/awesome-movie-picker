export const useLang = () => useState<string>("lang", () => useDefaultLang());

export const useDefaultLang = () => {
  if (process.server) {
    const nuxtApp = useNuxtApp();
    const reqLocale =
      nuxtApp.ssrContext?.req.headers["accept-language"]?.split(",")[0];

    if (reqLocale == "fr-FR") return "FR";
  }
  return "US";
};

export const useI18n = () => {
  return {
    US: {
      weekTrending: "Trending this week",
      discover: "Discover new movies",
      movieTypeSelect: "I want a movie of :",
      movieProvidersSelect: "On the providers : ",
      rankAbove: "With a score over",
      searchSubmit: "Search movies",
      duringFrom: "Movie duration from",
      to: "to",
    },
    FR: {
      weekTrending: "Populaire cette semaine",
      discover: "Découvrez de nouveaux films",
      movieTypeSelect: "Je veux un film :",
      movieProvidersSelect: "Sur les plateformes : ",
      rankAbove: "Avec un score au dessus de",
      searchSubmit: "Chercher les films",
      duringFrom: "Le film dure de",
      to: "à",
    },
  };
};
