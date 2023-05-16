import { DeepPartial } from "typeorm";
import { AppDataSource } from "../../data-source";
import { OperatingTime } from "../../entities/operatingTime.entity";
import { Restaurant } from "../../entities/restaurants.entity";

interface IRestaurantRequest {
    name: string
    cnpj: string
    type: string
    operatingTimes: {
        dayOfWeek: string
        openingTime: string
        closingTime: string
    }

}

interface ITimesRequest {
    dayOfWeek: string
    openingTime: string
    closingTime: string
}

export const createRestaurantService = async ({restaurantData}: any): Promise<any> => {

    const restaurantRepository = AppDataSource.getRepository(Restaurant)
    const operatingTimeRepository = AppDataSource.getRepository(OperatingTime)

    const restaurant = restaurantRepository.create({
        name: restaurantData.name,
        cnpj: restaurantData.cnpj,
        type: restaurantData.type,
    })

    await restaurantRepository.save(restaurant);

    restaurantData.operatingTimes.map(async(elem: ITimesRequest) => {
        let times = operatingTimeRepository.create(elem)
        times.restaurant = restaurant
        await operatingTimeRepository.save(times)
        })

return restaurant
}