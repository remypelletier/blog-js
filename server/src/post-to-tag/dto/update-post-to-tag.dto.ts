import { PartialType } from '@nestjs/mapped-types';
import { CreatePostToTagDto } from './create-post-to-tag.dto';

export class UpdatePostToTagDto extends PartialType(CreatePostToTagDto) {}
