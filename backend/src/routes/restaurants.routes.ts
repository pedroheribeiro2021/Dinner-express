import { Router } from "express";
import { createRestaurantsController, listRestaurantsController } from "../controllers/restaurants/restaurants.controller";


export const restaurantsRoutes = Router()

restaurantsRoutes.post('/', createRestaurantsController)
restaurantsRoutes.get('/', listRestaurantsController)