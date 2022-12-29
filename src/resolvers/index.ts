import getAnimeSearch from "./getAnimeSearch.js";

const resolvers = (client) => ({
  Query: {
    animeSearch: () => getAnimeSearch(client),
  },
});

export default resolvers;
