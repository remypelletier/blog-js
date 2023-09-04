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
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query: any) {
    if (query.userId) {
      query.userId = Number(query.userId);
    }
    return this.userService.findAll({ where: query });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.update({
      where: { id: Number(id) },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove({ id: Number(id) });
  }
}
