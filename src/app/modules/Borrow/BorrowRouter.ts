import { Router } from "express";

import { BorrowedBooks } from "./BorrowSummary";
import { BorrowBook } from "./BorrowController";

const Borrwbooks = Router();

Borrwbooks.post("/", BorrowBook);

Borrwbooks.get("/", BorrowedBooks);

export default Borrwbooks;
