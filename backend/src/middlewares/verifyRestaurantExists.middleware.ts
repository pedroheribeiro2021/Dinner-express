import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Restaurant } from "../entities/restaurants.entity";
import { AppError } from "../errors/AppError";


export const verifyRestaurantExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const restaurantRepository = AppDataSource.getRepository(Restaurant)

    const restaurantExists = restaurantRepository.findBy({
        cnpj: req.body.cnpj
    })

    if((await restaurantExists).length > 0){
        throw new AppError('CNPJ already registred', 400)
    }

    next()
}