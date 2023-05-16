import "express-async-errors";
import { handleError } from "./errors/handleError"
import express, { Application } from 'express'
import cors from "cors";
import { restaurantsRoutes } from "./routes/restaurants.routes";
import { isOpenRoutes } from "./routes/isOpen.routes";

export const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/restaurant', restaurantsRoutes)
app.use('/isopen', isOpenRoutes)

app.use(handleError)