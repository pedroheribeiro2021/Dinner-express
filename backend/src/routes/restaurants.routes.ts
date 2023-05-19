import { Router } from "express";
import { createRestaurantsController, deleteRestaurantsController, listRestaurantsController, updateRestaurantsController } from "../controllers/restaurants/restaurants.controller";
import { verifyRestaurantExistsMiddleware } from "../middlewares/verifyRestaurantExists.middleware";


export const restaurantsRoutes = Router()

restaurantsRoutes.post('/', verifyRestaurantExistsMiddleware, createRestaurantsController)
restaurantsRoutes.get('/', listRestaurantsController)
restaurantsRoutes.patch('/:id', updateRestaurantsController)
restaurantsRoutes.delete('/:id', deleteRestaurantsController)