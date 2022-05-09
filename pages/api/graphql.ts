import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import connectDb from "../../db/config";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

connectDb();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startSever = apolloServer.start();

export default async function handler(req, res) {
  await startSever;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}
