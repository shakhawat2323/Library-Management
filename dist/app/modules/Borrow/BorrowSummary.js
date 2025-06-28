"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowedBooks = void 0;
const Borrow_model_1 = require("./Borrow.model");
const BorrowedBooks = async (req, res) => {
    try {
        const summary = await Borrow_model_1.Borrow.aggregate([
            {
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" },
                },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "_id",
                    as: "bookDetails",
                },
            },
            {
                $unwind: "$bookDetails",
            },
            {
                $project: {
                    _id: 0,
                    book: {
                        title: "$bookDetails.title",
                        isbn: "$bookDetails.isbn",
                    },
                    totalQuantity: 1,
                },
            },
        ]);
        res.status(200).json({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data: summary,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving borrowed books summary",
        });
    }
};
exports.BorrowedBooks = BorrowedBooks;
