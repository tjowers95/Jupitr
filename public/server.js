"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ejs_1 = __importDefault(require("ejs"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send(ejs_1.default.render("index.html"));
});
app.post('/nu', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.params);
    console.log(req.query);
    res.send(ejs_1.default.render("<h1>Welcome</h1>"));
});
app.listen(8080, () => console.log("Listening on 8080"));
//# sourceMappingURL=server.js.map