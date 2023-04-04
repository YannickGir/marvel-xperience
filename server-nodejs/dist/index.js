"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
//variable d'environnement PORT => tiendra compte de celle-ci sinon on utilisera par défaut le port 4000
app.get("/", (_req, res) => {
    return res.json({
        status: "success ",
    });
    return res.send("<h2>Hi there ! </h2>");
});
app.listen(port, () => console.log(`linstening on port  ${port} !`));
