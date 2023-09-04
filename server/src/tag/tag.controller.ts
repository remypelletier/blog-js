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
import { TagService } from './tag.service';
import { Prisma } from '@prisma/client';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  create(@Body() createTagDto: Prisma.TagCreateInput) {
    return this.tagService.create(createTagDto);
  }

  @Get()
  findAll(@Query() query: any) {
    if (query.tagId) {
      query.tagId = Number(query.tagId);
    }
    return this.tagService.findAll({ where: query });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tagService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTagDto: Prisma.TagUpdateInput) {
    return this.tagService.update({
      where: { id: Number(id) },
      data: updateTagDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tagService.remove({ id: Number(id) });
  }
}
