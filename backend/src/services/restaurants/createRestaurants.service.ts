import { AppDataSource } from "../../data-source"
import { OperatingTime } from "../../entities/operatingTime.etity"
import { Restaurant } from "../../entities/restaurants.entity"


export const createRestaurantService = async (restaurantData: any, operatingTimeData: any): Promise<any> => {

    const restaurantRepository = AppDataSource.getRepository(Restaurant)
    const operatingTimeRepository = AppDataSource.getRepository(OperatingTime)

    const operatingTime = operatingTimeRepository.create({
        dayOfWeek: operatingTimeData.dayOfWeek,
        openingTime: operatingTimeData.openingTime,
        closingTime: operatingTimeData.closingTime
    })

    await operatingTimeRepository.save(operatingTime)

    const restaurant = restaurantRepository.create({
        ...restaurantData,
        operatingTime: operatingTime
    })

    await restaurantRepository.save(restaurant)

    return restaurant
}