import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const findIfUserExists = this.usersRepository.findById(user_id);
    if (!findIfUserExists) {
      throw new Error("Usuario inexistente");
    }
    this.usersRepository.turnAdmin(findIfUserExists);

    return findIfUserExists;
  }
}

export { TurnUserAdminUseCase };
