import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityModule } from './activities/activity.module';
import { TodoModule } from './todos/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';

@Module({
  imports: [
    ActivityModule,
    TodoModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
