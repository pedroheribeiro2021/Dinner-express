import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OperatingTime } from "./operatingTime.entity";

@Entity('restaurants')
export class Restaurant {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    cnpj: string

    @Column()
    type: string

    @OneToMany(() => OperatingTime, (operatingTimes) => operatingTimes.restaurant)
    operatingTimes: OperatingTime[]
}