"use strict";
(() => {
var exports = {};
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 323:
/***/ ((module) => {

module.exports = require("@mailchimp/mailchimp_marketing");

/***/ }),

/***/ 848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const mailchimp = __webpack_require__(323);
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_KEY,
    server: process.env.MAILCHIMP_SERVER_CODE
});
const listID = "147630c4f6";
async function handler(req, res) {
    const jsonData = {
        email_address: req.body.email,
        status: "subscribed"
    };
    try {
        const fetch = await mailchimp.lists.addListMember(listID, jsonData);
        if (fetch.status === "subscribed") {
            res.status(200).json({
                status: "subscribed"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(848));
module.exports = __webpack_exports__;

})();