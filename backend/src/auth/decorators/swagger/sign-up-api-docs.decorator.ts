import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SignUpApiDocs() {
  return applyDecorators(
    ApiOperation({ summary: 'Sign up user' }),
    ApiResponse({
      status: HttpStatus.OK,
      description: 'Successfully signed up user',
    }),
  );
}
