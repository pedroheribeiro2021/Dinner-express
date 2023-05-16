import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Restaurant } from "./restaurants.entity";

@Entity('operatingTimes')
export class OperatingTime {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    dayOfWeek: string

    @Column({ type: 'time' })
    openingTime: string

    @Column({ type: 'time' })
    closingTime: string

    @ManyToOne(() => Restaurant, restaurant => restaurant.operatingTimes, {
        onDelete: "CASCADE",
    })
    @JoinColumn()
    restaurant: Restaurant
}