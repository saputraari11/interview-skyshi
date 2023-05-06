import {IsNotEmpty, IsString} from 'class-validator'

export class UpdateActivityDto{
    @IsString()
    @IsNotEmpty()
    title:string
}