import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CreateTodoValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata,) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    const [titleError,activityGroupIdError,isActiveError] = errors
    
    if(titleError) {
        throw new BadRequestException("title cannot be null")
    }

    if(activityGroupIdError) {
        throw new BadRequestException("activity_group_id cannot be null")
    }

    if(isActiveError){
        throw new BadRequestException("is_active cannot be null")
    }

    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
