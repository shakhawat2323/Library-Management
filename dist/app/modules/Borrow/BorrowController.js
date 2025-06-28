"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowBook = void 0;
const book_model_1 = require("../Books/book.model");
const Borrow_model_1 = require("./Borrow.model");
const BorrowBook = async (req, res) => {
    try {
        const { book, quantity, dueDate } = req.body;
        const foundBook = await book_model_1.Book.findById(book);
        if (!foundBook) {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }
        else {
            if (foundBook.available && foundBook.copies >= quantity) {
                foundBook.copies -= quantity;
                if (foundBook.copies === 0) {
                    foundBook.available = false;
                }
                await foundBook.save();
                const borrowRecord = new Borrow_model_1.Borrow({ book, quantity, dueDate });
                await borrowRecord.save();
                res.status(201).json({
                    success: true,
                    message: "Book borrowed successfully",
                    data: borrowRecord,
                });
            }
            else {
                res.status(400).json({
                    success: false,
                    message: "Not enough copies available or book is unavailable",
                });
            }
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error borrowing book",
        });
    }
};
exports.BorrowBook = BorrowBook;
