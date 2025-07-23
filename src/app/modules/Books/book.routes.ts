import { Router } from "express";
import {
  CreateData,
  DeleteData,
  GetbookByIdteData,
  getBooksData,
  GetbookUpdateData,
} from "./book.control";

const BooksRouter = Router();
BooksRouter.post("/", CreateData);
BooksRouter.get("/", getBooksData);
BooksRouter.get("/:bookId", GetbookByIdteData);
BooksRouter.put("/:bookId", GetbookUpdateData);
BooksRouter.delete("/:bookId", DeleteData);

export default BooksRouter;
