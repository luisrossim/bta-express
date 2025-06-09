import { OrderController } from "@/controllers/order.controller.js";
import { AttachmentRepository } from "@/repositories/attachment.repository.js";
import { OrderRepository } from "@/repositories/order.repository.js";
import { OrderService } from "@/services/order.service.js";

export function createOrderController() {
   const orderRepository = new OrderRepository();
   const attachmentRepository = new AttachmentRepository();
   const orderService = new OrderService(orderRepository, attachmentRepository);
   return new OrderController(orderService)
}