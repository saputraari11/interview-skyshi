import {IsBoolean, IsNotEmpty, IsOptional, IsString} from 'class-validator'

export class UpdateTodoDto{

    @IsOptional()
    title:string


    @IsOptional()
    priority:string

    @IsOptional()
    is_active:boolean

    status:string
}