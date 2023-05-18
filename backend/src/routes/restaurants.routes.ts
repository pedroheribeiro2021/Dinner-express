import { Router } from "express";
import { createRestaurantsController, deleteRestaurantsController, listRestaurantsController, updateRestaurantsController } from "../controllers/restaurants/restaurants.controller";


export const restaurantsRoutes = Router()

restaurantsRoutes.post('/', createRestaurantsController)
restaurantsRoutes.get('/', listRestaurantsController)
restaurantsRoutes.patch('/:id', updateRestaurantsController)
restaurantsRoutes.delete('/:id', deleteRestaurantsController)