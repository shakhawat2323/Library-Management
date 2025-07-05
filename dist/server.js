"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Router_1 = __importDefault(require("./app/modules/Router"));
const Config_1 = __importDefault(require("./app/Config"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(Router_1.default);
app.get("/", (req, res) => {
    res.send("Server Is Running");
});
app.listen(Config_1.default.port, () => {
    console.log(`Server Is running ${PORT}`);
});
async function Server() {
    try {
        await mongoose_1.default.connect(Config_1.default.database_url);
        console.log(`✅Server is running${PORT}`);
    }
    catch (error) {
        console.log(`✅Server is running${error}`);
    }
}
Server();
