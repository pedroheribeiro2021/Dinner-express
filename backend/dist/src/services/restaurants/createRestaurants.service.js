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
exports.createRestaurantService = void 0;
const data_source_1 = require("../../data-source");
const operatingTime_entity_1 = require("../../entities/operatingTime.entity");
const restaurants_entity_1 = require("../../entities/restaurants.entity");
const createRestaurantService = ({ restaurantData }) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantRepository = data_source_1.AppDataSource.getRepository(restaurants_entity_1.Restaurant);
    const operatingTimeRepository = data_source_1.AppDataSource.getRepository(operatingTime_entity_1.OperatingTime);
    const restaurant = restaurantRepository.create({
        name: restaurantData.name,
        cnpj: restaurantData.cnpj,
        type: restaurantData.type,
        cellPhone: restaurantData.cellPhone
    });
    yield restaurantRepository.save(restaurant);
    restaurantData.operatingTimes.map((elem) => __awaiter(void 0, void 0, void 0, function* () {
        let times = operatingTimeRepository.create(elem);
        times.restaurant = restaurant;
        yield operatingTimeRepository.save(times);
    }));
    return restaurant;
});
exports.createRestaurantService = createRestaurantService;
