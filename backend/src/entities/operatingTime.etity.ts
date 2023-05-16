import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Restaurant } from "./restaurants.entity";

@Entity()
export class OperatingTime {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    dayOfWeek: string

    @Column({ type: 'time' })
    openingTime: string

    @Column({ type: 'time' })
    closingTime: string

    @ManyToOne(() => Restaurant, restaurant => restaurant.operatingTime, {
        onDelete: "CASCADE",
    })
    @JoinColumn()
    restaurant: Restaurant
}