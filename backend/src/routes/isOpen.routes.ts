import { Router } from "express";
import { isOpenController } from "../controllers/restaurants/restaurants.controller";


export const isOpenRoutes = Router()

isOpenRoutes.post('/', isOpenController)