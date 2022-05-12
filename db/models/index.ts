import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const ProjectsSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
});

export default mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema);
