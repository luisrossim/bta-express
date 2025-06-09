import { AuthController } from "@/controllers/auth.controller.js";
import { UserRepository } from "@/repositories/user.repository.js";
import { AuthService } from "@/services/auth.service.js";
import { UserService } from "@/services/user.service.js";


export function createAuthController() {
   const userRepository = new UserRepository();
   const userService = new UserService(userRepository);
   const authService = new AuthService(userService);
   return new AuthController(authService)
}