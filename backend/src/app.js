import express from "express"


const app = express()

// import routes
import bookRouter from "./routes/book.routes.js"

// routes declaration
app.use("/api/v1/books", bookRouter)

export { app }