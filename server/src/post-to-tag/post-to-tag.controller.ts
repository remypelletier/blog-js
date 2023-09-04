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
import { PostToTagService } from './post-to-tag.service';
import { Prisma } from '@prisma/client';

@Controller('postToTag')
export class PostToTagController {
  constructor(private readonly postToTagService: PostToTagService) {}

  @Post()
  create(@Body() createPostToTagDto: Prisma.PostToTagCreateInput) {
    return this.postToTagService.create(createPostToTagDto);
  }

  @Get()
  findAll(@Query() query: any) {
    if (query.tagId) {
      query.tagId = Number(query.tagId);
    }
    if (query.postId) {
      query.postId = Number(query.postId);
    }
    return this.postToTagService.findAll({ where: query });
  }

  @Get(':postId/:tagId')
  findOne(@Param() params: { postId: number; tagId: number }) {
    const { postId, tagId } = params;
    return this.postToTagService.findOne({
      postId_tagId: { postId: Number(postId), tagId: Number(tagId) },
    });
  }

  @Patch(':postId/:tagId')
  update(
    @Param() params: { postId: number; tagId: number },
    @Body() updatePostToTagDto: Prisma.PostToTagUpdateInput,
  ) {
    const { postId, tagId } = params;
    return this.postToTagService.update({
      where: { postId_tagId: { postId: Number(postId), tagId: Number(tagId) } },
      data: updatePostToTagDto,
    });
  }

  @Delete(':postId/:tagId')
  remove(@Param() params: { postId: number; tagId: number }) {
    const { postId, tagId } = params;
    return this.postToTagService.remove({
      postId_tagId: { postId: Number(postId), tagId: Number(tagId) },
    });
  }
}
