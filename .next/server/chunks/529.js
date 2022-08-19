"use strict";
exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monsterData": () => (/* binding */ monsterData)
/* harmony export */ });
const types = [
    "psychic",
    "rock",
    "bug",
    "dragon",
    "electra",
    "fight",
    "fire",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "water"
];
const monsterData = [
    {
        name: "Aerodactyl",
        description: `A ferocious prehistoric creature that goes for the enemy's throat with its serrated saw-like fangs.`,
        image1Url: "/images/aerodactyl/aerodactyl1.png",
        image2Url: "/images/aerodactyl/aerodactyl2.png",
        image3Url: "/images/aerodactyl/aerodactyl3.png",
        image4Url: "/images/aerodactyl/aerodactyl4.png",
        backgroundImageUrl: `/images/types/${types[1]}.jpg`,
        nationalNumber: 142,
        type: "rock",
        hp: 60,
        abilities: [
            {
                name: "Wing Attack",
                damage: 30
            }
        ]
    },
    {
        name: "Abra",
        description: `A ferocious prehistoric mon that goes for the enemy's throat with its serrated saw-like fangs.`,
        image1Url: "/images/abra/abra1.png",
        image2Url: "/images/abra/abra2.png",
        image3Url: "/images/abra/abra3.png",
        image4Url: "/images/abra/abra4.png",
        backgroundImageUrl: `/images/types/${types[1]}.jpg`,
        nationalNumber: 63,
        type: "psychic",
        hp: 30,
        abilities: [
            {
                name: "Psyshock",
                descriptopn: `Flip a coin. If heads, the Defending creature is now Paralyzed`,
                damage: 10
            }
        ]
    },
    {
        name: "pika",
        imageUrl: "/images/chu.png"
    }
];


/***/ })

};
;