"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 4922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "resolvers": () => (/* binding */ resolvers)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./db/models/index.ts

const { Schema  } = (external_mongoose_default());
(external_mongoose_default()).Promise = global.Promise;
const ProjectsSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    techStack: {
        type: [
            String
        ],
        required: true
    }
});
/* harmony default export */ const models = ((external_mongoose_default()).models.Projects || external_mongoose_default().model("Projects", ProjectsSchema));

;// CONCATENATED MODULE: ./pages/api/resolvers/index.ts

const resolvers = {
    Query: {
        getProjects: async ()=>{
            try {
                const projects = await models.find();
                return projects?.map(({ id , projectName , image , introduction , url , description , techStack  })=>({
                        id,
                        projectName,
                        image,
                        introduction,
                        url,
                        description,
                        techStack
                    })
                );
            } catch (error) {
                throw error;
            }
        },
        getProject: async (_, { projectName  })=>{
            try {
                const project = await models.find({
                    projectName: projectName
                });
                console.log("PROJECT", project);
                return {
                    id: project?.[0]?._id,
                    projectName: project?.[0]?.projectName,
                    image: project?.[0]?.image,
                    introduction: project?.[0]?.introduction,
                    url: project?.[0]?.url,
                    description: project?.[0]?.description,
                    techStack: project?.[0]?.techStack
                };
            } catch (error) {
                throw error;
            }
        }
    },
    Mutation: {
        newProject: async (_, { input  })=>{
            try {
                const project = new models(input);
                const result = await project.save();
                return result;
            } catch (err) {
                console.log(err);
            }
        },
        updateProject: async (_, { id , input  })=>{
            let project = await models.findById(id);
            if (!project) {
                throw new Error("Project not found");
            }
            project = await models.findOneAndUpdate({
                _id: id
            }, input, {
                new: true
            });
            return project;
        },
        deleteProject: async (_, { id  })=>{
            const project = await models.findById(id);
            if (!project) {
                throw new Error("Project not found");
            }
            await models.findOneAndDelete({
                _id: id
            });
            return "Product deleted";
        }
    }
};


/***/ })

};
;