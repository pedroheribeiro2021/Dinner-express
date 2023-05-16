import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { OperatingTime } from "./operatingTime.etity";

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    cnpj: string

    @Column()
    type: string

    @OneToMany(() => OperatingTime, operatingTime => operatingTime.restaurant)
    operatingTime: OperatingTime[];
}
