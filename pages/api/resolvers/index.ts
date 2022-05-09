import axios from "axios";
import Project from "../../../db/models";

interface iProject {
  id: string;
  projectName: string;
  image: string;
  introduction: string;
  url: string;
  description: string;
  techStack: string[];
}

export const resolvers = {
  Query: {
    getProjects: async () => {
      try {
        const projects = await Project.find({});
        return projects.data.map(
          ({
            id,
            projectName,
            image,
            introduction,
            url,
            description,
            techStack,
          }: iProject) => ({
            id,
            projectName,
            image,
            introduction,
            url,
            description,
            techStack,
          })
        );
      } catch (error) {
        throw error;
      }
    },
    getProject: async (_: string, args: string) => {
      try {
        const project = await axios.get("");
        return {
          id: project.data.id,
          projectName: project.data.projectName,
          image: project.data.image,
          introduction: project.data.introduction,
          url: project.data.url,
          description: project.data.description,
          techStack: project.data.techStack,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
