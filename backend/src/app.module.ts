import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DBConnectConfigModule } from './shared/modules/database-connect.module';
import { JwtGuardConfig } from './shared/config/guards/jwt-guards.config';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    DBConnectConfigModule,
    AuthModule,
    UserModule,
    CommentModule,
    PostModule,
  ],
  providers: [JwtGuardConfig],
})
export class AppModule {}
