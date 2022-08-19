"use strict";
(() => {
var exports = {};
exports.id = 891;
exports.ids = [891];
exports.modules = {

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ 
//     name: 'aero', 
//     imageUrl: '/images/aero.png' })
// }
// export default function handler(req:any, res:any) {
//   res.end(
//     `aero: ${
//         res.status(200).json({ 
//     name: 'aero', 
//     imageUrl: '/images/aero.png' })
//     }`
//     )
// }
function handler(req, res) {
    console.log(res);
    const { pid  } = req.query;
    res.end(`aero: ${res.status(200).json({
        name: "aero",
        imageUrl: "https://cult-of-three.vercel.app/Images/brute.png"
    })}`);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(175));
module.exports = __webpack_exports__;

})();