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
import { PostService } from './post.service';
import { Prisma } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: Prisma.PostCreateInput) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll(@Query() query: any) {
    if (query.userId) {
      query.userId = Number(query.userId);
    }
    return this.postService.findAll({ where: query });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updatePostDto: Prisma.PostUpdateInput,
  ) {
    return this.postService.update({
      where: { id: Number(id) },
      data: updatePostDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.postService.remove({ id: Number(id) });
  }
}
