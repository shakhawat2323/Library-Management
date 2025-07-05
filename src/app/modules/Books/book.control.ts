import { Request, Response } from "express";
import { Book } from "./book.model";

const CreateData = async (req: Request, res: Response) => {
  try {
    const data = await Book.create(req.body);
    res.send({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Book Not a Created",
      error,
    });
  }
};

const getBooksData = async (req: Request, res: Response) => {
  try {
    const genre = req.query.filter as string;
    const sortbooks = req.query.sort === "desc" ? -1 : 1;
    const bookslimit = parseInt(req.query.limit as string);

    const filter: any = {};
    if (genre) {
      filter.genre = new RegExp(`${genre}$`, "i");
    }

    const data = await Book.find(filter)
      .sort({ title: sortbooks })
      .limit(bookslimit);

    res.send({
      success: true,
      message: "Books retrieved successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Books not retrieved",
      error,
    });
  }
};

const GetbookUpdateData = async (req: Request, res: Response) => {
  try {
    const Id = req.params.bookId;
    const data = await Book.findByIdAndUpdate(Id, req.body, { new: true });
    res.send({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Book Not a Created",
      error,
    });
  }
};
const GetbookByIdteData = async (req: Request, res: Response) => {
  try {
    const Id = req.params.bookId;
    const data = await Book.findById(Id);
    res.send({
      success: true,
      message: "Book created successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Book Not a Created",
      error,
    });
  }
};
const DeleteData = async (req: Request, res: Response) => {
  try {
    const Id = req.params.bookId;
    const data = await Book.findByIdAndDelete(Id);
    res.send({
      success: true,
      message: "Book deleted successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Book Not a Delete",
      error,
    });
  }
};

export {
  CreateData,
  getBooksData,
  GetbookByIdteData,
  GetbookUpdateData,
  DeleteData,
};
