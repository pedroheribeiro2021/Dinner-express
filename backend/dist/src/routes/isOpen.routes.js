"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOpenRoutes = void 0;
const express_1 = require("express");
const restaurants_controller_1 = require("../controllers/restaurants/restaurants.controller");
exports.isOpenRoutes = (0, express_1.Router)();
exports.isOpenRoutes.post('/', restaurants_controller_1.isOpenController);
