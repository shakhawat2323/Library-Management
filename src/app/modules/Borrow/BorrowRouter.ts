import { Router } from "express";
import { borrowBook } from "./BorrowController";
import { borrowedBooksSummary } from "./BorrowSummary";

const Borrwbooks = Router();

Borrwbooks.post("/", borrowBook);

Borrwbooks.get("/", borrowedBooksSummary);

export default Borrwbooks;
