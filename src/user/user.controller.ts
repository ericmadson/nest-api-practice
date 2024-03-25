import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { name, email, password }: CreateUserDto) {
    return { name, email, password };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async show(@Param() params) {
    return { user: {}, params };
  }

  @Put(':id')
  async update(@Body() body, @Param() params) {
    return { body, params };
  }

  @Patch(':id')
  async updatePartial(@Body() body, @Param() params) {
    return { body, params };
  }

  @Delete(':id')
  async delete(@Param() params) {
    return { params };
  }
}
