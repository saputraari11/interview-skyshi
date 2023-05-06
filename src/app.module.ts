import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ActivityModule } from './activities/activity.module';
import { TodoModule } from './todos/todo.module';

@Module({
  imports: [AppConfigModule,DatabaseModule,ActivityModule,TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
