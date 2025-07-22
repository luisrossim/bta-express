import { OrderHistoryController } from "@/controllers/order-history.controller.js";
import { OrderHistoryRepository } from "@/repositories/order-history.repository.js";
import { UserRepository } from "@/repositories/user.repository.js";
import { OrderHistoryService } from "@/services/order-history.service.js";
import { UserService } from "@/services/user.service.js";

export function createOrderHistoryController() {
   const orderHistoryRepository = new OrderHistoryRepository();
   const userRepository = new UserRepository();
   const userService = new UserService(userRepository);
   const orderHistoryService = new OrderHistoryService(orderHistoryRepository, userService);
   return new OrderHistoryController(orderHistoryService)
}