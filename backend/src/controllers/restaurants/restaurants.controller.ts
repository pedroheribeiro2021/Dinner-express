import { Request, Response } from "express"
import { createRestaurantService } from "../../services/restaurants/createRestaurants.service";
import { listRestaurantService } from "../../services/restaurants/listRestaurants.service";
import { updateRestaurantService } from "../../services/restaurants/updateRestaurants.service";
import { deleteRestaurantService } from "../../services/restaurants/deleteRestaurants.service";
import { isOpenService } from "../../services/restaurants/isOpen.service";

export const createRestaurantsController = async (req: Request, res: Response) => {
    const restaurantData = req.body
    const body = await createRestaurantService({restaurantData})
    return res.status(201).json(body)
}

export const listRestaurantsController = async (req: Request, res: Response) => {
    const body = await listRestaurantService()
    return res.status(200).json(body)
}

export const updateRestaurantsController = async (req: Request, res: Response) => {
    const restaurantData = req.body
    const restaurantId: string = req.params.id
    const body = await updateRestaurantService(restaurantData, restaurantId)
    return res.status(201).json(body)
}

export const deleteRestaurantsController = async (req: Request, res: Response) => {
    const restaurantId: string = req.params.id
    await deleteRestaurantService(restaurantId)
    return res.status(204).send()
}

export const isOpenController = async (req: Request, res: Response) => {
    const restaurantData = req.body
    const restaurantId: string = req.params.id;
    const result = await isOpenService(restaurantData)

    res.json({ status: result })
}