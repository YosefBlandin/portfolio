import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Project {
    id: ID
    projectName: String
    image: String
    url: String
  }

  type Query {
    getProjects: [Project]
    getProject(projectName: String!): Project!
  }

  input ProjectInput {
    projectName: String
    image: String
    url: String
  }

  type Mutation {
    newProject(input: ProjectInput): Project
    updateProject(id: ID!, input: ProjectInput): Project
    deleteProject(id: ID!): String
  }
`;
