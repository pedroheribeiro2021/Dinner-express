import { AppDataSource } from "../../data-source"
import { Restaurant } from "../../entities/restaurants.entity"


export const deleteRestaurantService = async (restaurantId: string) => {

    const restaurantRepository = AppDataSource.getRepository(Restaurant)

    const restaurant = await restaurantRepository.findOneBy({
        id: restaurantId
    })

    await restaurantRepository.remove(restaurant!)
}