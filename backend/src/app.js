import express from "express"
import cors from "cors"

const app = express()

app.use(express.json(
    { limit: "16kb" }
))

app.use(cors(
    {
        origin: 'http://localhost:5173',
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