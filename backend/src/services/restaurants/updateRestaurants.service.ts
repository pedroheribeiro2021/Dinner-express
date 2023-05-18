import { In } from "typeorm"
import { AppDataSource } from "../../data-source"
import { OperatingTime } from "../../entities/operatingTime.entity"
import { Restaurant } from "../../entities/restaurants.entity"
import { IRestaurantRequest, ITimesRequest } from "../../interfaces/restaurants.interface"


export const updateRestaurantService = async (
    updateRestaurantData: any, restaurantId: string): Promise<any> => {

    const restaurantRepository = AppDataSource.getRepository(Restaurant)
    const operatingTimeRepository = AppDataSource.getRepository(OperatingTime)

    const restaurant = await restaurantRepository.findOne({
        where: { id: restaurantId },
        relations: {
            operatingTimes: true
        }
    })

    const updatedRestaurant = restaurantRepository.create({
        ...restaurant,
        name: updateRestaurantData.name,
        cnpj: updateRestaurantData.cnpj,
        type: updateRestaurantData.type,
    })
    const updateOperatingTimes = updateRestaurantData.operatingTimes

    await restaurantRepository.save(updatedRestaurant)

    const oldOperatingTimes = restaurant!.operatingTimes
    if (oldOperatingTimes) {
      const operatingTimesIds = oldOperatingTimes.map((times) => times.id)
      await operatingTimeRepository.delete({ id: In(operatingTimesIds) })
    }
    
    if(updateOperatingTimes){
        await Promise.all(
            updateRestaurantData.operatingTimes.map(async(elem: ITimesRequest) => {
                let times = operatingTimeRepository.create(elem)
                times.restaurant = updatedRestaurant
                await operatingTimeRepository.save(times)
            })
        )
    }

    const restaurantResponse = await restaurantRepository.findOne({
        where: { id: restaurantId },
        relations: {
            operatingTimes: true
        }
    })

    return restaurantResponse
}