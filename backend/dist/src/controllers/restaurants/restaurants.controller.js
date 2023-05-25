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
exports.isOpenController = exports.deleteRestaurantsController = exports.updateRestaurantsController = exports.listRestaurantsController = exports.createRestaurantsController = void 0;
const createRestaurants_service_1 = require("../../services/restaurants/createRestaurants.service");
const listRestaurants_service_1 = require("../../services/restaurants/listRestaurants.service");
const updateRestaurants_service_1 = require("../../services/restaurants/updateRestaurants.service");
const deleteRestaurants_service_1 = require("../../services/restaurants/deleteRestaurants.service");
const isOpen_service_1 = require("../../services/restaurants/isOpen.service");
const createRestaurantsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantData = req.body;
    const body = yield (0, createRestaurants_service_1.createRestaurantService)({ restaurantData });
    return res.status(201).json(body);
});
exports.createRestaurantsController = createRestaurantsController;
const listRestaurantsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = yield (0, listRestaurants_service_1.listRestaurantService)();
    return res.status(200).json(body);
});
exports.listRestaurantsController = listRestaurantsController;
const updateRestaurantsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantData = req.body;
    const restaurantId = req.params.id;
    const body = yield (0, updateRestaurants_service_1.updateRestaurantService)(restaurantData, restaurantId);
    return res.status(201).json(body);
});
exports.updateRestaurantsController = updateRestaurantsController;
const deleteRestaurantsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantId = req.params.id;
    yield (0, deleteRestaurants_service_1.deleteRestaurantService)(restaurantId);
    return res.status(204).send();
});
exports.deleteRestaurantsController = deleteRestaurantsController;
const isOpenController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantData = req.body;
    const restaurantId = req.params.id;
    const result = yield (0, isOpen_service_1.isOpenService)(restaurantData);
    res.json({ status: result });
});
exports.isOpenController = isOpenController;
