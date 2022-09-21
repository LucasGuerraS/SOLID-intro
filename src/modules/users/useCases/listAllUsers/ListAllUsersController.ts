import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { authorization: user_id } = request.headers;

    const all = this.listAllUsersUseCase.execute({ user_id });
    if (all) {
      return response.json(all).send();
    }

    return response.status(400).send();
  }
}

export { ListAllUsersController };
