const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int @deprecated(reason: "Use durationInSeconds")
    modulesCount: Int
    durationInSeconds: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  type Module {
    id: ID!
    title: String
    length: Int @deprecated(reason: "Use durationInSeconds")
    durationInSeconds: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String!
  }
`;

module.exports = typeDefs;
