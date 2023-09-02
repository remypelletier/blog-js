import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> | null {
    const user = await this.userService.user({ email: email });
    if (user && user.password === password) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const validateUser = await this.validateUser(user.email, user.password);
    if (validateUser) {
      const payload = {
        email: validateUser.email,
        name: validateUser.name,
        sub: validateUser.id,
      };
      return {
        access_token: await this.jwtService.sign(payload),
      };
    }
    throw new UnauthorizedException();
  }
}
