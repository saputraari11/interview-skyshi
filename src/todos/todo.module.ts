import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { CreateTodoValidationPipe } from "./validate/create-todo.validate";

@Module({
    imports:[TypeOrmModule.forFeature([Todo])],
    controllers:[TodoController],
    providers:[TodoService,CreateTodoValidationPipe],
})
export class TodoModule{}