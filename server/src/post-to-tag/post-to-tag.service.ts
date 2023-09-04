import { Injectable } from '@nestjs/common';
import { PostToTag, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostToTagService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.PostToTagCreateInput): Promise<PostToTag> {
    return this.prisma.postToTag.create({ data });
  }

  findAll(params: {
    where?: Prisma.PostToTagWhereInput;
    orderBy?: Prisma.PostToTagOrderByWithRelationInput;
  }): Promise<PostToTag[]> {
    return this.prisma.postToTag.findMany({
      where: params.where,
      orderBy: params.orderBy,
    });
  }

  findOne(where: Prisma.PostToTagWhereUniqueInput): Promise<PostToTag> {
    return this.prisma.postToTag.findUnique({ where: where });
  }

  update(params: {
    where: Prisma.PostToTagWhereUniqueInput;
    data: Prisma.PostToTagUpdateInput;
  }): Promise<PostToTag> {
    return this.prisma.postToTag.update({
      data: params.data,
      where: params.where,
    });
  }

  remove(where: Prisma.PostToTagWhereUniqueInput): Promise<PostToTag> {
    return this.prisma.postToTag.delete({
      where,
    });
  }
}
