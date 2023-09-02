import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('user')
  async getAllUser(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.body);
    return this.authService.login(req.body);
  }

  @Get('profile')
  async profile() {
    return 'profile view or datas';
  }
}
