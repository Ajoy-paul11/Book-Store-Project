import { app } from "./app.js"
import dotenv from "dotenv"
import connectDB from "./db/index.js"



dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT || 8001, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed: ", error);

    })


app.get('/', (req, res) => {
    res.send("Hello PaulStore!")
})