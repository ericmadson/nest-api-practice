import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
  })
  password: string;
}
