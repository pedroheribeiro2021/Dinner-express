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

    restaurant?.operatingTimes.map(el => {
        if(restaurantData.dayOfWeek != el.dayOfWeek || restaurantData.openingTime != el.openingTime || restaurantData.closingTime != el.closingTime){
            console.log('is open')  
        } else {
            console.log('diferente')
        }
    })
}