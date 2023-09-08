import { ConflictException, Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(user: Prisma.UserCreateInput): Promise<User> {
    if (await this.findOne({ email: user.email })) {
      throw new ConflictException('Email duplicated');
    }
    return this.prisma.user.create({
      data: {
        ...user,
        password: await hash(user.password, 10),
      },
    });
  }

  findAll(params: {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    return this.prisma.user.findMany({
      where: params.where,
      orderBy: params.orderBy,
    });
  }

  findOne(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({ where: where });
  }

  update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    return this.prisma.user.update({
      data: params.data,
      where: params.where,
    });
  }

  remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
