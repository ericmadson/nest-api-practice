import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ name, email, password }: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }

  async list() {
    return this.prisma.user.findMany();
  }

  async show(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, data: UpdatePutUserDto) {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async updatePartial(id: number, data: UpdatePatchUserDto) {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }
}
