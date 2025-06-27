import { Router } from "express";
import BooksRouter from "../Books/book.routes";
import Borrwbooks from "../Borrow/BorrowRouter";

const router = Router();
router.use("/books", BooksRouter);
router.use("/borrow", Borrwbooks);
export default router;
