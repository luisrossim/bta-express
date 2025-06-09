import { UserController } from "@/controllers/user.controller.js";
import { UserRepository } from "@/repositories/user.repository.js";
import { UserService } from "@/services/user.service.js";

export function createUserController() {
   const userRepository = new UserRepository();
   const userService = new UserService(userRepository);
   return new UserController(userService)
}