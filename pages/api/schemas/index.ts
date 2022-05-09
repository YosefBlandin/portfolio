import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Project {
    id: ID
    projectName: String
    image: String
    introduction: String
    description: String
    url: String
    techStack: [String]
  }

  type Query {
    getProjects: [Project]
    getProject(name: String!): Project!
  }
`;
