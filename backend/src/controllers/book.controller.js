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


const addToBookList = asyncHandler(async (req, res) => {

    const { title, genre, price, category, image } = req.body

    if ([title, genre, category, image].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields must be filled")
    }

    if (typeof (price) !== "number") {
        throw new ApiError(400, "Price field can't be empty, provide 0 at least.")
    }

    const books = await Book.create({
        title,
        genre,
        price,
        category,
        image
    })

    if (!books) {
        throw new ApiError(500, "Something occurred while adding the books to DB")
    }

    res.status(200)
        .json(
            new ApiResponse(200, books, "Books list updated successfully")
        )
})



export { getBooksList, addToBookList }