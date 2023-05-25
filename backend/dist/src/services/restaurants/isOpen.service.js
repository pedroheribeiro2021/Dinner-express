"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOpenService = void 0;
const data_source_1 = require("../../data-source");
const restaurants_entity_1 = require("../../entities/restaurants.entity");
const isOpenService = (restaurantData) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantRepository = data_source_1.AppDataSource.getRepository(restaurants_entity_1.Restaurant);
    const restaurant = yield restaurantRepository.findOne({
        where: { name: restaurantData.name },
        relations: {
            operatingTimes: true
        }
    });
    if (restaurant) {
        const isOpen = restaurant.operatingTimes.some(el => {
            if (restaurantData.dayOfWeek === el.dayOfWeek &&
                restaurantData.time >= el.openingTime &&
                restaurantData.time <= el.closingTime) {
                return true;
            }
            return false;
        });
        if (isOpen) {
            return 'O restaurante está aberto! :D';
        }
        else {
            return 'O restaurante está fechado :(';
        }
    }
    return 'Restaurante não encontrado';
});
exports.isOpenService = isOpenService;
