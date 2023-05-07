import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("todos")
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column()
    activity_group_id:number

    @Column()
    title:string

    @Column()
    is_active:boolean

    @Column({default:'very-high'})
    priority:string

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