import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { CreateActivityDto } from "./dto/create-activity.dto";
import { ActivityService } from "./activity.service";
import {Response} from 'express'
import { CreateActivityValidationPipe } from "./validate/create-activity.validate";
import { UpdateActivityValidationPipe } from "./validate/update-activity.validate";
import { UpdateActivityDto } from "./dto/update-activity.dto";

@Controller("activity-groups")
export class ActivityController{
    constructor(private activityService:ActivityService){}

    @Get()
    async findAll(@Res() response:Response){
        const result = await this.activityService.findAll()
        
        response.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:HttpStatus.OK,
            data:result
        })
    }

    @Get(":id")
    async findOne(@Param('id') id:number,@Res() response:Response){
        const result = await this.activityService.findOne(id)
        
        response.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:HttpStatus.OK,
            data:result
        })
    }

    @Post()
    async createActivity(@Body(new CreateActivityValidationPipe()) createActivityDto:CreateActivityDto,@Res() response:Response){
        const result = await this.activityService.createActivity(createActivityDto)

        response.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:HttpStatus.OK,
            data:result
        })
    }

    @Patch(":id")
    async updateActivity(@Param('id') id:number,@Body(new UpdateActivityValidationPipe) updateActivityDto:UpdateActivityDto,@Res() response:Response){
        const result = await this.activityService.updateActivity(id,updateActivityDto)

        response.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:HttpStatus.OK,
            data:result
        })
    }

    @Delete(":id")
    async deleteActivity(
    @Param("id")
    id:number,
    @Res() response:Response
    ){
        const result = await this.activityService.deleteActivity(id)

        response.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:HttpStatus.OK,
            data:result
        })
    }
}