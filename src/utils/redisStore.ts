import { AxiosResponse } from "axios";
import { RedisClientType } from "redis";

export const redisStore = async (
  client: RedisClientType,
  key: string,
  callback: () => Promise<AxiosResponse<any, any>>
) => {
  const value = await client.get(key);
  if (!value) {
    return callback().then(async (res) => {
      if (res) {
        const { data } = res;
        await client.set(key, JSON.stringify(data));
        return data;
      }
    });
  } else {
    return JSON.parse(value);
  }
};
