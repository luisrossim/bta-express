import { Router } from "express";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { createUserSchema } from "@/models/dtos/create-user.dto.js";
import { UserController } from "@/controllers/user.controller.js";
import { asyncHandler } from "@/utils/async-handler.js";

const router = Router();
const userController = new UserController();

router.get(
  '/', 
  asyncHandler((req, res, next) => userController.findAll(req, res))
)

router.get(
  '/:id',
  asyncHandler((req, res, next) => userController.findById(req, res))
)

router.post(
  '/', 
  validate(createUserSchema),
  asyncHandler((req, res, next) => userController.create(req, res))
)

router.post(
  '/:id', 
  asyncHandler((req, res, next) => userController.update(req, res))
)

export default router;