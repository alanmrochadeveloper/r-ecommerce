import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async buscarPorId(id: string): Promise<User> {
    try {
      const user = this.find({ id });
      return user;
    } catch (error) {
      throw new NotFoundException(`Não foi possível achar o usuário!`);
    }
  }

  async buscarTodos(): Promise<User[]> {
    return this.find();
  }

  async criar(criarUser: CreateUserDto): Promise<User> {
    return this.save(criarUser);
  }

  async atualizar(modificarUser: UpdateUserDto, id: string): Promise<User> {
    await this.update(modificarUser, id);
    return await this.buscarPorId(id);
  }

  async remover(id): Promise<User> {
    return this.delete({ id });
  }
}
