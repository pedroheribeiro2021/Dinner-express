export interface IRestaurantRequest {
    name: string
    cnpj: string
    type: string
}

export interface ITimesRequest {
    dayOfWeek: string
    openingTime: string
    closingTime: string
}