import { Request, Response } from "express";
import { Book } from "../Books/book.model";
import { Borrow } from "./Borrow.model";

export const BorrowBook = async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;

    const foundBook = await Book.findById(book);
    if (!foundBook) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    } else {
      if (foundBook.available && foundBook.copies >= quantity) {
        foundBook.copies -= quantity;

        if (foundBook.copies === 0) {
          foundBook.available = false;
        }

        await foundBook.save();

        const borrowRecord = new Borrow({ book, quantity, dueDate });
        await borrowRecord.save();

        res.status(201).json({
          success: true,
          message: "Book borrowed successfully",
          data: borrowRecord,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Not enough copies available or book is unavailable",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error borrowing book",
    });
  }
};
