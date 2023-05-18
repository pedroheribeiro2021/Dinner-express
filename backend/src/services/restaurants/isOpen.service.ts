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

    // console.log(restaurant?.type)

    // restaurant?.operatingTimes.map(el => {
    //     if(restaurantData.dayOfWeek != el.dayOfWeek || restaurantData.openingTime != el.openingTime || restaurantData.closingTime != el.closingTime){
    //         console.log('is open')  
    //     } else {
    //         console.log('diferente')
    //     }
    // })

    if (restaurant) {
        const isOpen = restaurant.operatingTimes.some(el => {
            // const restaurantName = restaurantData.name.toLowerCase();
            // const operatingTimeName = restaurant.name.toLowerCase();
            // console.log(restaurantName)
            // console.log(operatingTimeName)

          if (
            // restaurantName === operatingTimeName &&
            restaurantData.dayOfWeek === el.dayOfWeek &&
            restaurantData.time >= el.openingTime &&
            restaurantData.time <= el.closingTime
          ) {
            return true
          }
          return false
        });
    
        if (isOpen) {
            return 'O restaurante está aberto! :D'
          } else {
            return 'O restaurante está fechado :('
          }
        }
      
        return 'Restaurante não encontrado'
}