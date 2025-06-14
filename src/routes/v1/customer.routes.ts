import { Router } from "express";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { customerSchema } from "@/models/dtos/customer.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { JWTAuth } from "@/middlewares/jwt.middleware.js";
import { createCustomerController } from "@/factories/customer-factory.js";

const router = Router();
const customerController = createCustomerController();

router.get(
  '/',
  JWTAuth,
  asyncHandler((req, res, next) => customerController.findAll(req, res))
);

router.get(
  '/:id',
  JWTAuth,
  asyncHandler((req, res, next) => customerController.findById(req, res))
);

router.post(
  '/',
  JWTAuth,
  validate(customerSchema), 
  asyncHandler((req, res, next) => customerController.create(req, res))
);

router.put(
  '/:id',
  JWTAuth,
  validate(customerSchema), 
  asyncHandler((req, res, next) => customerController.update(req, res))
);

export default router;