import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getById(id: string): Promise<User> {
    try {
      const user = this.find({ id });
      return;
      /* return user; */
    } catch (error) {
      throw new NotFoundException(`Não foi possível achar o usuário!`);
    }
  }

  async getAll(): Promise<User[]> {
    return this.find();
  }

  async createUser(criarUser: CreateUserDto): Promise<User> {
    return this.save(criarUser);
  }

  async updateUser(modificarUser: UpdateUserDto, id: string): Promise<User> {
    /* await this.update(modificarUser, id); */
    /* return await this.getById(id); */
    return;
  }

  async remover(id: string): Promise<User> {
    /* return this.delete({ id }); */
    return;
  }
}
