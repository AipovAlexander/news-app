import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { ERROR_MESSAGE } from './constants';
import * as bcrypt from 'bcrypt';
import { HASH_SALT } from '../shared/constants';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const { email, username, password } = createUserDto;

    const existingEmail = await this.userModel.findOne({ email });
    if (existingEmail) {
      throw new BadRequestException(ERROR_MESSAGE.EMAIL_ALREADY_EXIST);
    }

    const existingUsername = await this.userModel.findOne({ username });
    if (existingUsername) {
      throw new BadRequestException(ERROR_MESSAGE.USERNAME_ALREADY_EXIST);
    }

    const hashedPassword = await bcrypt.hash(password, HASH_SALT);

    return this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email });

    if (!user) throw new NotFoundException(ERROR_MESSAGE.USER_NOT_FOUND);

    return user;
  }
}
