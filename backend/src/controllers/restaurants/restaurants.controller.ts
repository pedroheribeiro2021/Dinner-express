import { Request, Response } from "express"
import { createRestaurantService } from "../../services/restaurants/createRestaurants.service";
import { listRestaurantService } from "../../services/restaurants/listRestaurants.service";

export const createRestaurantsController = async (req: Request, res: Response) => {
    const restaurantData = req.body
    const body = await createRestaurantService({restaurantData})
    return res.status(201).json(body)
}

export const listRestaurantsController = async (req: Request, res: Response) => {
    const body = await listRestaurantService()
    return res.status(200).json(body)
}