import { Book } from "../models/book.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const getBooksList = asyncHandler(async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200)
            .json(
                new ApiResponse(200, books, "Books list fetched successfully")
            )
    } catch (error) {
        throw new ApiError(500, "Error occurred while getting the book data")
    }
})


export { getBooksList }