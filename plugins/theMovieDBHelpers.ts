export default defineNuxtPlugin(() => {
  return {
    provide: {
      getNameFromGenderId: (id: number) => idToGenreFR[id],
      getAllGenders: () => Object.entries(idToGenreFR),
      getAllProviders: () => providersInfos,
    },
  };
});

var idToGenre = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

var idToGenreFR = {
  28: "Action",
  12: "Aventure",
  16: "Animation",
  35: "Comédie",
  80: "Crime",
  99: "Documentaire",
  18: "Drame",
  10751: "Famille",
  14: "Fantastique",
  36: "Histoire",
  27: "Horreur",
  10402: "Musique",
  9648: "Mystère",
  10749: "Romance",
  878: "Science-fiction",
  10770: "Film TV",
  53: "Thriller",
  10752: "Guerre",
  37: "Western",
};

var providersInfos = [
  {
    display_priority: 0,
    logo_path: "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
    provider_name: "Netflix",
    provider_id: [8],
  },
  {
    display_priority: 1,
    logo_path: "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
    provider_name: "Amazon Prime Video",
    provider_id: [119, 9, 10, 194],
  },
  {
    display_priority: 3,
    logo_path: "/hGvUo8KZTRLDZWcfFJS3gA8aenB.jpg",
    provider_name: "Canal+",
    provider_id: [381],
  },
  {
    display_priority: 11,
    logo_path: "/6uhKBfmtzFqOcLousHwZuzcrScK.jpg",
    provider_name: "Apple TV Plus",
    provider_id: [350],
  },
  {
    display_priority: 18,
    logo_path: "/knpqBvBQjyHnFrYPJ9bbtUCv6uo.jpg",
    provider_name: "Canal VOD",
    provider_id: [58],
  },
  {
    display_priority: 27,
    logo_path: "/fN1aQj1gpWXGW0gwcGlHJYQHUeS.jpg",
    provider_name: "Anime Digital Networks",
    provider_id: [415],
  },
  {
    display_priority: 29,
    logo_path: "/5uUdbTzTj4N2Wso1FTt2rRoJ5Da.jpg",
    provider_name: "SALTO",
    provider_id: [564],
  },
  {
    display_priority: 30,
    logo_path: "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg",
    provider_name: "Disney Plus",
    provider_id: [337],
  },
];
