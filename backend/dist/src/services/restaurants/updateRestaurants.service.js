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
exports.updateRestaurantService = void 0;
const typeorm_1 = require("typeorm");
const data_source_1 = require("../../data-source");
const operatingTime_entity_1 = require("../../entities/operatingTime.entity");
const restaurants_entity_1 = require("../../entities/restaurants.entity");
const updateRestaurantService = (updateRestaurantData, restaurantId) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantRepository = data_source_1.AppDataSource.getRepository(restaurants_entity_1.Restaurant);
    const operatingTimeRepository = data_source_1.AppDataSource.getRepository(operatingTime_entity_1.OperatingTime);
    const restaurant = yield restaurantRepository.findOne({
        where: { id: restaurantId },
        relations: {
            operatingTimes: true
        }
    });
    const updatedRestaurant = restaurantRepository.create(Object.assign(Object.assign({}, restaurant), { name: updateRestaurantData.name, cnpj: updateRestaurantData.cnpj, type: updateRestaurantData.type }));
    const updateOperatingTimes = updateRestaurantData.operatingTimes;
    yield restaurantRepository.save(updatedRestaurant);
    const oldOperatingTimes = restaurant.operatingTimes;
    if (oldOperatingTimes) {
        const operatingTimesIds = oldOperatingTimes.map((times) => times.id);
        yield operatingTimeRepository.delete({ id: (0, typeorm_1.In)(operatingTimesIds) });
    }
    if (updateOperatingTimes) {
        yield Promise.all(updateRestaurantData.operatingTimes.map((elem) => __awaiter(void 0, void 0, void 0, function* () {
            let times = operatingTimeRepository.create(elem);
            times.restaurant = updatedRestaurant;
            yield operatingTimeRepository.save(times);
        })));
    }
    const restaurantResponse = yield restaurantRepository.findOne({
        where: { id: restaurantId },
        relations: {
            operatingTimes: true
        }
    });
    return restaurantResponse;
});
exports.updateRestaurantService = updateRestaurantService;
