import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateTodoValidationPipe } from "./validate/create-todo.validate";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { TodoService } from "./todo.service";

@Controller("todo-items")
export class TodoController{
    constructor(private todoService:TodoService){}

    @Get()
    async findAll(@Res() response:Response,@Query('activity_group_id') activity_group_id:number){
        const result = await this.todoService.findAll(activity_group_id)
        
        response.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:HttpStatus.OK,
            data:result
        })
    }

    @Get(":id")
    async findOne(@Param('id') id:number,@Res() response:Response){
        const result = await this.todoService.findOne(id)
        
        response.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:HttpStatus.OK,
            data:result
        })
    }

    @Post()
    async createTodo(@Body(new CreateTodoValidationPipe()) createTodoDto:CreateTodoDto,@Res() response:Response){
        const result = await this.todoService.createTodo(createTodoDto)

        response.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:HttpStatus.OK,
            data:result
        })
    }

    @Patch(":id")
    async updateTodo(@Param('id') id:number,@Body() updateTodoDto:UpdateTodoDto,@Res() response:Response){
        const result = await this.todoService.updateTodo(id,updateTodoDto)

        response.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:HttpStatus.OK,
            data:result
        })
    }

    @Delete(":id")
    async deleteTodo(
    @Param("id")
    id:number,
    @Res() response:Response
    ){
        const result = await this.todoService.deleteTodo(id)

        response.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:HttpStatus.OK,
            data:result
        })
    }
}