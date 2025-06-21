import { Router } from "express";
import BooksRouter from "../Books/book.routes";

const router = Router();
router.use("/books", BooksRouter);
export default router;
