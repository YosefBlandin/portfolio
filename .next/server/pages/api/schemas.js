"use strict";
(() => {
var exports = {};
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 6352:
/***/ ((module) => {

module.exports = require("apollo-server-micro");

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
var __webpack_exports__ = (__webpack_exec__(6121));
module.exports = __webpack_exports__;

})();