import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

export class UserRepository extends Repository<User> {
  constructor() {
    super();
  }

  async findById(id: string) {
    try {
      const user = this.findOne({ id });
      return user;
    } catch (e: any) {
      console.error(`Não foi possível encontrar o usuário com o id ${id}`);
    }
  }
}
