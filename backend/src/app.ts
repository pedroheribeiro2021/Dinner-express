import "express-async-errors";
import { handleError } from "./errors/handleError"
import express, { Application } from 'express'
import cors from "cors";
import { restaurantsRoutes } from "./routes/restaurants.routes";
import { isOpenRoutes } from "./routes/isOpen.routes";

import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json"

export const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use('/restaurant', restaurantsRoutes)
app.use('/isopen', isOpenRoutes)

app.use(handleError)