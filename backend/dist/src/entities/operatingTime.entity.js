"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatingTime = void 0;
const typeorm_1 = require("typeorm");
const restaurants_entity_1 = require("./restaurants.entity");
let OperatingTime = class OperatingTime {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OperatingTime.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OperatingTime.prototype, "dayOfWeek", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], OperatingTime.prototype, "openingTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], OperatingTime.prototype, "closingTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => restaurants_entity_1.Restaurant, restaurant => restaurant.operatingTimes, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", restaurants_entity_1.Restaurant)
], OperatingTime.prototype, "restaurant", void 0);
OperatingTime = __decorate([
    (0, typeorm_1.Entity)('operatingTimes')
], OperatingTime);
exports.OperatingTime = OperatingTime;
