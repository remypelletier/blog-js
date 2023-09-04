import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Prisma } from '@prisma/client';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: Prisma.ProjectCreateInput) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll(@Query() query: any) {
    if (query.projectId) {
      query.projectId = Number(query.projectId);
    }
    return this.projectService.findAll({ where: query });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projectService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateProjectDto: Prisma.ProjectUpdateInput,
  ) {
    return this.projectService.update({
      where: { id: Number(id) },
      data: updateProjectDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectService.remove({ id: Number(id) });
  }
}
