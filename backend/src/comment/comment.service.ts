import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from './comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    return this.commentModel.create(createCommentDto);
  }

  async findAll() {
    return this.commentModel.find();
  }

  async findOne(id: string) {
    const result = await this.commentModel.findById(id);

    if (!result) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    return result;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const result = await this.commentModel.findByIdAndUpdate(
      id,
      updateCommentDto,
      {
        new: true,
      },
    );

    if (!result) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }

    return result;
  }

  async remove(id: string) {
    return this.commentModel.findByIdAndDelete(id);
  }
}
