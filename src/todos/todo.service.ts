import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(activity_group_id?:number) {
    let filter = {};
    if(activity_group_id) {
        filter = {activity_group_id:activity_group_id}
    }

    const todos = await this.todoRepository.find({where:filter});

    return todos;
  }

  async findOne(id: number) {
    const todo = await this.todoRepository.findOne({ where: { id: id } });

    if (!todo) {
      throw new BadRequestException(`Todo with ID ${id} Not Found`);
    }

    return todo;
  }

  async createTodo(createTodoDto: CreateTodoDto) {
    const newTodo = new Todo();
    newTodo.title = createTodoDto.title;
    newTodo.activity_group_id = createTodoDto.activity_group_id;
    newTodo.is_active = createTodoDto.is_active;
    const result = await this.todoRepository.save(newTodo);

    return result;
  }
  async updateTodo(id: number, data: UpdateTodoDto) {
    const todo = await this.findOne(id);

    if (data.title) todo.title = data.title;
    if (data.priority) todo.priority = data.priority;
    if (data.is_active) todo.is_active = data.is_active;
    todo.save();

    return todo;
  }

  async deleteTodo(id: number) {
    const todo = await this.findOne(id);

    todo.remove();

    return {};
  }
}
