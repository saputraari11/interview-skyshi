import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Activity } from "./activity.entity";
import { CreateActivityDto } from "./dto/create-activity.dto";
import { UpdateActivityDto } from "./dto/update-activity.dto";

@Injectable()
export class ActivityService{
    constructor(
    @InjectRepository(Activity) 
    private activityRepository:Repository<Activity>){}

    async findAll(){
        const activities = await this.activityRepository.find()
        
        return activities
    }

    async findOne(id:number){
        const activity = await this.activityRepository.findOne({where:{id:id}})

        if(!activity) {
            throw new BadRequestException(`Activity with ID ${id} Not Found`)
        }

        return activity
    }

    async createActivity(createActivityDto:CreateActivityDto){
        const newActivity = new Activity();
        newActivity.title = createActivityDto.title
        newActivity.email = createActivityDto.email
        const result = await this.activityRepository.save(newActivity)

        return result
    }
    async updateActivity(id:number,data:UpdateActivityDto){
        const activity = await this.findOne(id)

        activity.title = data.title
        activity.save()

        return activity
    }

    async deleteActivity(id:number){
        const activity = await this.findOne(id)

        activity.remove()

        return {}
    }
}