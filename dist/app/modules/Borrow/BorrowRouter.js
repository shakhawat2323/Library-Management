"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BorrowSummary_1 = require("./BorrowSummary");
const BorrowController_1 = require("./BorrowController");
const Borrwbooks = (0, express_1.Router)();
Borrwbooks.post("/", BorrowController_1.BorrowBook);
Borrwbooks.get("/", BorrowSummary_1.BorrowedBooks);
exports.default = Borrwbooks;
