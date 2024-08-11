import { Router } from "express";
import { addToBookList, getBooksList } from "../controllers/book.controller.js";

const router = Router()


router.route("/").get(getBooksList).post(addToBookList)

export default router;