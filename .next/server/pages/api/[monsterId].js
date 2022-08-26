"use strict";
(() => {
var exports = {};
exports.id = 658;
exports.ids = [658];
exports.modules = {

/***/ 266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_monsterData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(529);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    const { monsterId  } = req.query;
    function returnData() {
        let x;
        switch(monsterId){
            case "all":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData;
                break;
            case "psychic":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "psychic");
                break;
            case "rock":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "rock");
                break;
            case "bug":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "bug");
                break;
            case "dragon":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "dragon");
                break;
            case "electra":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "electra");
                break;
            case "fight":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "fight");
                break;
            case "fire":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "fire");
                break;
            case "ghost":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "ghost");
                break;
            case "grass":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "grass");
                break;
            case "ground":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "ground");
                break;
            case "ice":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "ice");
                break;
            case "normal":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "normal");
                break;
            case "poison":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "poison");
                break;
            case "water":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.filter((x)=>x.type === "water");
                break;
            case "aerodactyl":
            case "142":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.find((x)=>x.name === "Aerodactyl");
                break;
            case "abra":
            case "63":
                x = _data_monsterData__WEBPACK_IMPORTED_MODULE_0__.monsterData.find((x)=>x.name === "Abra");
        }
        if (x) {
            return res.status(200).json(x);
        }
    }
    res.end(returnData());
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [529], () => (__webpack_exec__(266)));
module.exports = __webpack_exports__;

})();