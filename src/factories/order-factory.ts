import { OrderController } from "@/controllers/order.controller.js";
import { AttachmentRepository } from "@/repositories/attachment.repository.js";
import { OrderRepository } from "@/repositories/order.repository.js";
import { UserRepository } from "@/repositories/user.repository.js";
import { OrderService } from "@/services/order.service.js";
import { UserService } from "@/services/user.service.js";

export function createOrderController() {
   const orderRepository = new OrderRepository();
   const attachmentRepository = new AttachmentRepository();
   const userRepository = new UserRepository();
   const userService = new UserService(userRepository);
   const orderService = new OrderService(orderRepository, attachmentRepository, userService);
   return new OrderController(orderService)
}