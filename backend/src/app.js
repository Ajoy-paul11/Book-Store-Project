import express from "express"
import cors from "cors"

const app = express()

app.use(express.json(
    { limit: "16kb" }
))

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))

// import routes
import bookRouter from "./routes/book.routes.js"
import userRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/books", bookRouter)
app.use("/api/v1/users", userRouter)

export { app }