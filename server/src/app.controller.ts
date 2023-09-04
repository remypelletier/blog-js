import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
  Query,
  Param,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserDTO, UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('user')
  async signupUser(
    @Body() userData: { name: string; email: string; password: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('users')
  async getAllUser(
    @Query('email') email: string,
  ): Promise<UserModel[] | UserModel> {
    console.log('Endpoint: Users');
    if (email) {
      return this.userService.user({ email: email });
    }
    return this.userService.users({});
  }

  @Get('users/:id')
  async getUser(@Param('id') id: string): Promise<UserModel | UserDTO> {
    console.log('Endpoint: User');
    return this.userService.user({
      id: parseInt(id),
    });
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async profile(@Request() req) {
    return req.body;
  }
}
