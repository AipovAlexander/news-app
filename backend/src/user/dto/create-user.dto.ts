import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Matches, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @Matches(/^[a-zA-Z]+$/, { message: 'Name must contain only letters' })
  name: string;

  @ApiProperty()
  @IsString()
  @Matches(/^[a-zA-Z]+$/, { message: 'lastname must contain only letters' })
  lastname: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty()
  @IsString()
  @IsStrongPassword(
    {
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    },
    {
      message:
        'The password must contain at least 8 characters, 1 capital letter and 1 number.',
    },
  )
  password: string;
}
