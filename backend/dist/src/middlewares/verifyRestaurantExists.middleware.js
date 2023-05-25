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
exports.verifyRestaurantExistsMiddleware = void 0;
const data_source_1 = require("../data-source");
const restaurants_entity_1 = require("../entities/restaurants.entity");
const AppError_1 = require("../errors/AppError");
const verifyRestaurantExistsMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantRepository = data_source_1.AppDataSource.getRepository(restaurants_entity_1.Restaurant);
    const restaurantExists = restaurantRepository.findBy({
        cnpj: req.body.cnpj
    });
    if ((yield restaurantExists).length > 0) {
        throw new AppError_1.AppError('CNPJ already registred', 400);
    }
    next();
});
exports.verifyRestaurantExistsMiddleware = verifyRestaurantExistsMiddleware;
