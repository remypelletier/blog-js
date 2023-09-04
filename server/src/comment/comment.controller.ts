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
import { CommentService } from './comment.service';
import { Prisma } from '@prisma/client';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: Prisma.CommentCreateInput) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll(@Query() query: any) {
    if (query.commentId) {
      query.commentId = Number(query.commentId);
    }
    return this.commentService.findAll({ where: query });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.commentService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateCommentDto: Prisma.CommentUpdateInput,
  ) {
    return this.commentService.update({
      where: { id: Number(id) },
      data: updateCommentDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.commentService.remove({ id: Number(id) });
  }
}
