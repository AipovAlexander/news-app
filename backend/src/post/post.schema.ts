import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../user/user.schema';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ required: true })
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  author: User;

  @Prop()
  image: string;

  //TODO коменты отдельная сущность?
  @Prop({ type: [{ type: String }] })
  comments: string[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: 0 })
  likes: number;

  @Prop()
  views: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
