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


const updateBookDetails = asyncHandler(async (req, res) => {
    const { id } = req.params

    const getBook = await Book.findById(id)

    if (!getBook) {
        throw new ApiError(400, "Book doesn't exist")
    }

    const { title, genre } = req.body

    if (!title?.trim() && !genre?.trim()) {
        throw new ApiError(400, "No field is given to update")
    }

    if (title?.trim()) {
        const updatedBook = await Book.findByIdAndUpdate(id,
            { $set: { title } },
            { new: true }
        )

        return res
            .status(200)
            .json(new ApiResponse(200, updatedBook, "Book updated successfully"))

    } else if (genre?.trim()) {
        const updateBook = await Book.findByIdAndUpdate(id,
            { $set: { genre } },
            { new: true }
        )

        return res
            .status(200)
            .json(new ApiResponse(200, updateBook, "Book updated successfully"))

    } else {
        const updateBook = await Book.findByIdAndUpdate(id,
            { $set: { title, genre } },
            { new: true }
        )

        return res
            .status(200)
            .json(new ApiResponse(200, updateBook, "Book details updated successfully"))
    }
})



export { getBooksList, addToBookList, updateBookDetails }