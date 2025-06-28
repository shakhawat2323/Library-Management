import { Router } from "express";
import BooksRouter from "../Books/book.routes";
import Borrwbooks from "../Borrow/BorrowRouter";

const router = Router();
router.use("/api/books", BooksRouter);
router.use("/api/borrow", Borrwbooks);
export default router;
