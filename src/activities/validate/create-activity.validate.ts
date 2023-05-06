import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CreateActivityValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata,) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    const [titleError,emailError] = errors
    
    if(titleError) {
        throw new BadRequestException("title cannot be null")
    }

    if(emailError) {
        throw new BadRequestException("email cannot be null")
    }

    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
