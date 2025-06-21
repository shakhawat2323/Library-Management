"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteData = exports.GetbookUpdateData = exports.GetbookByIdteData = exports.getBooksData = exports.CreateData = void 0;
const book_model_1 = require("./book.model");
const CreateData = async (req, res) => {
    try {
        const data = await book_model_1.Book.create(req.body);
        res.send({
            success: true,
            message: "Book created successfully",
            data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Book Not a Created",
            error,
        });
    }
};
exports.CreateData = CreateData;
const getBooksData = async (req, res) => {
    try {
        const genre = req.query.filter;
        const sortbooks = req.query.sort === "desc" ? -1 : 1;
        const bookslimit = parseInt(req.query.limit) || 10;
        const filter = {};
        if (genre) {
            filter.genre = new RegExp(`${genre}$`, "i");
        }
        const data = await book_model_1.Book.find(filter)
            .sort({ title: sortbooks })
            .limit(bookslimit);
        res.send({
            success: true,
            message: "Books retrieved successfully",
            data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Books not retrieved",
            error,
        });
    }
};
exports.getBooksData = getBooksData;
const GetbookUpdateData = async (req, res) => {
    try {
        const Id = req.params.bookId;
        const data = await book_model_1.Book.findByIdAndUpdate(Id, req.body, { new: true });
        res.send({
            success: true,
            message: "Book created successfully",
            data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Book Not a Created",
            error,
        });
    }
};
exports.GetbookUpdateData = GetbookUpdateData;
const GetbookByIdteData = async (req, res) => {
    try {
        const Id = req.params.bookId;
        const data = await book_model_1.Book.findById(Id);
        res.send({
            success: true,
            message: "Book created successfully",
            data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Book Not a Created",
            error,
        });
    }
};
exports.GetbookByIdteData = GetbookByIdteData;
const DeleteData = async (req, res) => {
    try {
        const Id = req.params.bookId;
        const data = await book_model_1.Book.findByIdAndDelete(Id);
        res.send({
            success: true,
            message: "Book deleted successfully",
            data,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Book Not a Delete",
            error,
        });
    }
};
exports.DeleteData = DeleteData;
