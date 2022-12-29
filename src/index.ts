import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { createClient } from "redis";

import resolvers from "./resolvers/index.js";
import typeDefs from "./typeDefs/index.js";

const client = createClient();
await client.connect();

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers(client),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

client.on("error", async (err) => {
  console.log("Redis Client Error", err);

  await client.disconnect();
});
