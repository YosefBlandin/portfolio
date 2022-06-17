import axios from 'axios'
import Project from '../../../db/models'

interface iProject {
  id: string
  projectName: string
  image: string
  introduction: string
  url: string
  description: string
  techStack: string[]
}

export const resolvers = {
  Query: {
    getProjects: async () => {
      try {
        const projects = await Project.find()
        return projects?.map(
          ({
            id,
            projectName,
            image,
            url,
          }: iProject) => ({
            id,
            projectName,
            image,
            url,
          })
        )
      } catch (error) {
        throw error
      }
    },
    getProject: async (_: string, { projectName }: { projectName: string }) => {
      try {
        const project = await Project.find({ projectName: projectName })
        console.log('PROJECT', project)
        return {
          id: project?.[0]?._id,
          projectName: project?.[0]?.projectName,
          image: project?.[0]?.image,
          url: project?.[0]?.url,
        }
      } catch (error) {
        throw error
      }
    }
  },
  Mutation: {
    newProject: async (_: string, { input }: { input: string }) => {
      try {
        const project = new Project(input)

        const result = await project.save()

        return result
      } catch (err) {
        console.log(err)
      }
    },
    updateProject: async (
      _: string,
      { id, input }: { id: string; input: {} }
    ) => {
      let project = await Project.findById(id)

      if (!project) {
        throw new Error('Project not found')
      }

      project = await Project.findOneAndUpdate({ _id: id }, input, {
        new: true
      })

      return project
    },
    deleteProject: async (_: string, { id }: { id: string }) => {
      const project = await Project.findById(id)

      if (!project) {
        throw new Error('Project not found')
      }

      await Project.findOneAndDelete({ _id: id })

      return 'Product deleted'
    }
  }
}
