import { HttpStatus, applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SignInApiDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Sign in user' }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'User signed in successfully',
    }),
    ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'Invalid credentials',
    }),
  );
}
