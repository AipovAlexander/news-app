import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './../../../auth/guards/jwt.guard';

export const JwtGuardConfig = {
  provide: APP_GUARD,
  useClass: JwtGuard,
};
