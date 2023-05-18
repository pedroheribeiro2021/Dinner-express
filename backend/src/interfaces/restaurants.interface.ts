export interface IRestaurantRequest {
    name: string
    cnpj: string
    type: string
    // operatingTimes: {
    //     dayOfWeek: string
    //     openingTime: string
    //     closingTime: string
    // }

}

export interface ITimesRequest {
    dayOfWeek: string
    openingTime: string
    closingTime: string
}