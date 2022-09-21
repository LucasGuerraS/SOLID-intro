import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const admin = this.usersRepository.findById(user_id);
    const findIfUserExists = this.usersRepository.findById(user_id);
    if (!findIfUserExists || !admin.admin) {
      throw new Error("Usuario inexistente");
    }
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
