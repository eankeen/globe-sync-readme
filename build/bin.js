"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
main_1.main("package.json").catch((err) => {
    console.error(err);
});
