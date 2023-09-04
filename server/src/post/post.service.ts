import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  findAll(params: {
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: params.where,
      orderBy: params.orderBy,
    });
  }

  findOne(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.prisma.post.findUnique({ where: where });
  }

  update(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUpdateInput;
  }): Promise<Post> {
    return this.prisma.post.update({
      data: params.data,
      where: params.where,
    });
  }

  remove(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.prisma.post.delete({
      where,
    });
  }
}
