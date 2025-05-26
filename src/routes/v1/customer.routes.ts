import { Router } from "express";
import { CustomerController } from "@/controllers/customer.controller.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { createCustomerSchema } from "@/models/dtos/create-customer.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { JWTAuth } from "@/middlewares/jwt.middleware.js";

const router = Router();
const customerController = new CustomerController();

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
  validate(createCustomerSchema), 
  asyncHandler((req, res, next) => customerController.create(req, res))
);

router.post(
  '/:id',
  JWTAuth,
  asyncHandler((req, res, next) => customerController.update(req, res))
);

export default router;