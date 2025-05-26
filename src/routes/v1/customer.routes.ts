import { Router } from "express";
import { CustomerController } from "@/controllers/customer.controller.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { createCustomerSchema } from "@/models/dtos/create-customer.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";

const router = Router();
const customerController = new CustomerController();

router.get(
  '/', 
  asyncHandler(customerController.findAll)
);

router.get(
  '/:id', 
  asyncHandler(customerController.findById)
);

router.post(
  '/', 
  validate(createCustomerSchema), 
  asyncHandler(customerController.create)
);

router.post(
  '/:id', 
  asyncHandler(customerController.update)
);

export default router;