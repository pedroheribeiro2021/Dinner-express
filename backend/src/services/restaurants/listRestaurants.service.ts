import { AppDataSource } from "../../data-source"
import { Restaurant } from "../../entities/restaurants.entity"


export const listRestaurantService = async (): Promise<any> => {

    const restaurantRepository = AppDataSource.getRepository(Restaurant)

    const restaurant = await restaurantRepository.find({
        relations: {
            operatingTimes: true
        }
    })

    return restaurant
}