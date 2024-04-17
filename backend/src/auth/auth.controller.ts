import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { SignInDto } from './dto/sign-in.dto';
import { ApiTags } from '@nestjs/swagger';
import { SignUpApiDocs, SignInApiDocs } from './decorators/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @SignUpApiDocs()
  @Post('sign-up')
  async signUp(@Body() createUserDto: CreateUserDto) {
    const { email } = await this.userService.create(createUserDto);
    return this.authService.generateToken(email);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @SignInApiDocs()
  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    const { email, password } = signInDto;

    const user = await this.userService.findByEmail(email);

    const isPasswordMatch = await this.authService.comparePasswords(
      password,
      user.password,
    );
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.authService.generateToken(email);

    return { token, user };
  }
}
