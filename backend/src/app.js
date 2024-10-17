import express from "express"
import cors from "cors"
import { processError } from "./controllers/error.controller.js"

const app = express()

app.use(express.json(
    { limit: "16kb" }
))

app.use(cors(
    {
        origin: 'https://book-store-project-jjg2.onrender.com',
        credentials: true
    }
))


// import routes
import bookRouter from "./routes/book.routes.js"
import userRouter from "./routes/user.routes.js"


// routes declaration
app.use("/api/v1/books", bookRouter)
app.use("/api/v1/users", userRouter)


// error middleware
app.use(processError)


export { app }
