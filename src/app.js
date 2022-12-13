import "express-async-errors"
import { handleAppError } from "./middlewares"
import "dotenv/config"
import express from "express"
import { categoriesRouter, productsRouter } from "./routers"

const app = express()

app.use(express.json())

app.use("/categories",categoriesRouter)
app.use("/products",productsRouter)
app.use(handleAppError)

export default app
