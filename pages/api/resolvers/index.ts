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
        const projects = await Project.find();
        return projects?.data?.map(
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
  Mutation: {
    newProject: async (_, { input }) => {
      try {
        const project = new Project(input);

        const result = await project.save();

        return result;
      } catch (err) {
        console.log(err);
      }
    },
    updateProject: async (_, { id, input }) => {
      let project = await Project.findById(id);

      if (!project) {
        throw new Error("Project not found");
      }

      project = await Project.findOneAndUpdate({ _id: id }, input, {
        new: true,
      });

      return project;
    },
    deleteProject: async (_, { id }) => {
      const project = await Project.findById(id);

      if (!project) {
        throw new Error("Project not found");
      }

      await Project.findOneAndDelete({ _id: id });

      return "Product deleted";
    },
  },
};
