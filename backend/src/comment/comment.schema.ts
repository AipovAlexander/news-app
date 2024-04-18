import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../user/user.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({ required: true })
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  authorId: User;

  @Prop({ default: null, required: false })
  authorAvatar: string;

  @Prop({ default: null, required: false })
  image: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: 0 })
  countLikes: number;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
