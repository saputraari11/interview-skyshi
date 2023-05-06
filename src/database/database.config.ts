import { Inject } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { Activity } from 'src/activities/activity.entity'
import { Todo } from 'src/todos/todo.entity'
import databaseConfig from '../config/database.config'

export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(
    @Inject(databaseConfig.KEY)
    private config: ConfigType<typeof databaseConfig>,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    
    return {
      ...this.config,
      type: "mysql",
      entities:[Todo,Activity]
    }
  }
}
