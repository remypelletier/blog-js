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
    let pagination = {};
    const querySearch = {
      role: query?.role,
      email: query?.email,
      name: query?.name,
    };
    if (query.userId) {
      query.userId = Number(query.userId);
    }
    if (query.page) {
      pagination['skip'] = (Number(query.page) - 1) * 10;
      pagination['take'] = 10;
    }
    console.log(query);
    if (query.count) {
      return this.userService.agregate({ _count: { id: true } });
    }
    return this.userService.findAll({ where: querySearch, ...pagination });
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
