import { Injectable } from '@nestjs/common';
import { Project, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ProjectCreateInput): Promise<Project> {
    return this.prisma.project.create({ data });
  }

  findAll(params: {
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput;
  }): Promise<Project[]> {
    return this.prisma.project.findMany({
      where: params.where,
      orderBy: params.orderBy,
    });
  }

  findOne(where: Prisma.ProjectWhereUniqueInput): Promise<Project> {
    return this.prisma.project.findUnique({ where: where });
  }

  update(params: {
    where: Prisma.ProjectWhereUniqueInput;
    data: Prisma.ProjectUpdateInput;
  }): Promise<Project> {
    return this.prisma.project.update({
      data: params.data,
      where: params.where,
    });
  }

  remove(where: Prisma.ProjectWhereUniqueInput): Promise<Project> {
    return this.prisma.project.delete({
      where,
    });
  }
}
