import { OrderHistoryController } from "@/controllers/order-history.controller.js";
import { OrderHistoryRepository } from "@/repositories/order-history.repository.js";
import { OrderHistoryService } from "@/services/order-history.service.js";

export function createOrderHistoryController() {
   const orderHistoryRepository = new OrderHistoryRepository();
   const orderHistoryService = new OrderHistoryService(orderHistoryRepository);
   return new OrderHistoryController(orderHistoryService)
}