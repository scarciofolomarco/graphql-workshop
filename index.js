const { GraphQLServer } = require("graphql-yoga");

const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

console.log(typeDefs);

// const typeDefs = `
//   type Query {
//     getShibas(count: Int): [String]
//     getShiba: [String]
//   }
// `;

const options = {
  port: 8000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);
