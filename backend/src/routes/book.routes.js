import { Router } from "express";
import { addToBookList, getBooksList, updateBookDetails } from "../controllers/book.controller.js";

const router = Router()


router.route("/").get(getBooksList).post(addToBookList)
router.route("/:id").patch(updateBookDetails)

export default router;