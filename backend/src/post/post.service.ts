import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './post.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  create(createPostDto: CreatePostDto) {
    return this.postModel.create(createPostDto);
  }

  findAll() {
    return this.postModel.find();
  }

  async findById(id: string) {
    const post = await this.postModel.findById(id);

    if (!post) {
      throw new NotFoundException(`Post with ID '${id}' not found`);
    }

    return post;
  }

  async findByIdAndUpdate(id: string, updatePostDto: UpdatePostDto) {
    const existingPost = await this.postModel.findByIdAndUpdate(
      id,
      updatePostDto,
      { new: true },
    );

    if (!existingPost) {
      throw new NotFoundException(`Post with ID '${id}' not found`);
    }

    return existingPost;
  }

  deleteById(id: string) {
    return this.postModel.findByIdAndDelete(id);
  }
}
