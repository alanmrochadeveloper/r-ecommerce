import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user ' + JSON.stringify(createUserDto);
  }

  findAll() {
    return [
      {
        id: '512312',
        email: 'teste@gmail.com',
      },
      { id: '21w8dsf', email: 'teste2@gmail.com' },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User[]> {
    return [];
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user ${JSON.stringify(updateUserDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
