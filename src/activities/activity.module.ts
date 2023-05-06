import { Module } from "@nestjs/common";
import { ActivityController } from "./activity.controller";
import { ActivityService } from "./activity.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Activity } from "./activity.entity";
import { CreateActivityValidationPipe } from "./validate/create-activity.validate";
import { UpdateActivityValidationPipe } from "./validate/update-activity.validate";

@Module({
  imports: [TypeOrmModule.forFeature([Activity])],
  controllers: [ActivityController],
  providers: 
  [ ActivityService,
    {
        provide:"VALIDATE",
        useValue:[CreateActivityValidationPipe,UpdateActivityValidationPipe]
    }
  ],
})
export class ActivityModule {}