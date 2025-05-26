import { Router } from "express";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { createUserSchema } from "@/models/dtos/create-user.dto.js";
import { UserController } from "@/controllers/user.controller.js";
import { asyncHandler } from "@/utils/async-handler.js";

const router = Router();
const userController = new UserController();

router.get(
  '/', 
  asyncHandler(userController.findAll)
)

router.get(
  '/:id',
  asyncHandler(userController.findById)
)

router.post(
  '/', 
  validate(createUserSchema), 
  asyncHandler(userController.create)
)

router.post(
  '/:id', 
  asyncHandler(userController.update)
)

export default router;