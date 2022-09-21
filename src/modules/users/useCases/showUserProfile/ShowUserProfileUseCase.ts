import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const findIfUserExists = this.usersRepository.findById(user_id);

    if (!findIfUserExists) {
      throw new Error("Usuario inexistente");
    } else {
      const user = this.usersRepository.findById(user_id);

      return user;
    }
  }
}

export { ShowUserProfileUseCase };
