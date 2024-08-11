import { Router } from "express";
import { getBooksList } from "../controllers/book.controller.js";

const router = Router()


router.route("/").get(getBooksList)

export default router;