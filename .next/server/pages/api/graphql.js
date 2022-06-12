"use strict";
(() => {
var exports = {};
exports.id = 702;
exports.ids = [702,608,779];
exports.modules = {

/***/ 6352:
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ graphql_config),
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "apollo-server-micro"
var external_apollo_server_micro_ = __webpack_require__(6352);
// EXTERNAL MODULE: ./pages/api/schemas/index.ts
var schemas = __webpack_require__(6121);
// EXTERNAL MODULE: ./pages/api/resolvers/index.ts + 1 modules
var resolvers = __webpack_require__(4922);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./db/config/index.ts

const MongoDB = process.env.MONGODB_URI ?? "mongodb+srv://";
const connectDb = async ()=>{
    try {
        await external_mongoose_default().connect(MongoDB);
        console.log("DB CONNECTED!");
    } catch (error) {
        console.log("DB CONNECTING ERROR", error);
        process.exit(1);
    }
};
/* harmony default export */ const config = (connectDb);

;// CONCATENATED MODULE: external "apollo-server-core"
const external_apollo_server_core_namespaceObject = require("apollo-server-core");
;// CONCATENATED MODULE: ./pages/api/graphql.ts





config();
const apolloServer = new external_apollo_server_micro_.ApolloServer({
    typeDefs: schemas.typeDefs,
    resolvers: resolvers.resolvers,
    plugins: [
        (0,external_apollo_server_core_namespaceObject.ApolloServerPluginLandingPageGraphQLPlayground)()
    ]
});
const graphql_config = {
    api: {
        bodyParser: false
    }
};
const startSever = apolloServer.start();
async function handler(req, res) {
    await startSever;
    await apolloServer.createHandler({
        path: "/api/graphql"
    })(req, res);
};


/***/ }),

/***/ 6121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeDefs": () => (/* binding */ typeDefs)
/* harmony export */ });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6352);
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);

const typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`
  type Project {
    id: ID
    projectName: String
    image: String
    introduction: String
    description: String
    url: String
    techStack: [String!]
  }

  type Query {
    getProjects: [Project]
    getProject(projectName: String!): Project!
  }

  input ProjectInput {
    projectName: String
    image: String
    introduction: String
    description: String
    url: String
    techStack: [String!]
  }

  type Mutation {
    newProject(input: ProjectInput): Project
    updateProject(id: ID!, input: ProjectInput): Project
    deleteProject(id: ID!): String
  }
`;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922], () => (__webpack_exec__(6465)));
module.exports = __webpack_exports__;

})();