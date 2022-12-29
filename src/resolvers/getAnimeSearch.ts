import axios from "axios";
import { RedisClientType } from "redis";

import paths from "../utils/paths.js";
import { redisStore } from "../utils/redisStore.js";

const getAnimeSearch = async (client: RedisClientType) => {
  return redisStore(client, paths.ANIME_SEARCH_PATH, () =>
    axios.get(`${paths.BASE_URL}${paths.ANIME_SEARCH_PATH}`)
  );
};

export default getAnimeSearch;
