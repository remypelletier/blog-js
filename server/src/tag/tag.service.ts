import { Injectable } from '@nestjs/common';
import { Tag, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.TagCreateInput): Promise<Tag> {
    return this.prisma.tag.create({ data });
  }

  findAll(params: {
    where?: Prisma.TagWhereInput;
    orderBy?: Prisma.TagOrderByWithRelationInput;
  }): Promise<Tag[]> {
    return this.prisma.tag.findMany({
      where: params.where,
      orderBy: params.orderBy,
    });
  }

  findOne(where: Prisma.TagWhereUniqueInput): Promise<Tag> {
    return this.prisma.tag.findUnique({ where: where });
  }

  update(params: {
    where: Prisma.TagWhereUniqueInput;
    data: Prisma.TagUpdateInput;
  }): Promise<Tag> {
    return this.prisma.tag.update({
      data: params.data,
      where: params.where,
    });
  }

  remove(where: Prisma.TagWhereUniqueInput): Promise<Tag> {
    return this.prisma.tag.delete({
      where,
    });
  }
}
