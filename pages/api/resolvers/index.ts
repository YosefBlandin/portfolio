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
        return projects?.map(
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
    getProject: async (_: string, { projectName }: { projectName: string }) => {
      try {
        const project = await Project.find({ projectName: projectName });
        console.log("PROJECT", project);
        return {
          id: project?.[0]?._id,
          projectName: project?.[0]?.projectName,
          image: project?.[0]?.image,
          introduction: project?.[0]?.introduction,
          url: project?.[0]?.url,
          description: project?.[0]?.description,
          techStack: project?.[0]?.techStack,
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
