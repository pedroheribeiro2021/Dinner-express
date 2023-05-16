import { Router } from "express";
import { createRestaurantsController } from "../controllers/restaurants/restaurants.controller";


export const restaurantsRoutes = Router()

restaurantsRoutes.post('/', createRestaurantsController)