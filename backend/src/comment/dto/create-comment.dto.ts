import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsMongoId } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'The ID of the author of the comment' })
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  authorId: string;

  @ApiProperty()
  authorAvatar?: string;

  @ApiProperty()
  image?: string;
}
