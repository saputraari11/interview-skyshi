import {IsBoolean, IsNotEmpty, IsNumber, IsString} from 'class-validator'

export class CreateTodoDto{
    @IsString()
    @IsNotEmpty()
    title:string

    @IsNumber()
    @IsNotEmpty()
    activity_group_id:number

    @IsBoolean()
    @IsNotEmpty()
    is_active:boolean
}