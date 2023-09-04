import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { ProjectModule } from './project/project.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, PostModule, TagModule, ProjectModule, CommentModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
