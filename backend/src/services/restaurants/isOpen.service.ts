import { getDay, parseISO } from "date-fns"
import { AppDataSource } from "../../data-source"
import { Restaurant } from "../../entities/restaurants.entity"


export const isOpenService = async (restaurantData: any) => {

    const restaurantRepository = AppDataSource.getRepository(Restaurant)

    const restaurant = await restaurantRepository.findOne({
        where: { name: restaurantData.name },
        relations: {
            operatingTimes: true
        }
    })


    if (restaurant) {
        const isOpen = restaurant.operatingTimes.some(el => {

          if (
            restaurantData.dayOfWeek === el.dayOfWeek &&
            restaurantData.time >= el.openingTime &&
            restaurantData.time <= el.closingTime
          ) {
            return true
          }
          return false
        })
    
        if (isOpen) {
            return 'O restaurante está aberto! :D'
          } else {
            return 'O restaurante está fechado :('
          }
        }
      
        return 'Restaurante não encontrado'
}