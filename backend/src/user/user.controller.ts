import { Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from '../auth/auth.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get('/me')
  me(@Req() req: Request) {
    const { user } = req;
    return user;
  }
}
