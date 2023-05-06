import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Activity extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column()
    title:string

    @Column()
    email:string

    @CreateDateColumn({
        type: 'timestamp',
        name: 'createdAt',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt: Date
    
    @UpdateDateColumn({
    type: 'timestamp',
    name: 'updatedAt',
    default: () => 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt: Date
}