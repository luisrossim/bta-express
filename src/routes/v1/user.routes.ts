import { Router } from "express";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { createUserSchema } from "@/models/dtos/user.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { JWTAuth } from "@/middlewares/jwt.middleware.js";
import { authorizeRoles } from "@/middlewares/authorize-roles.middleware.js";
import { createUserController } from "@/factories/user-factory.js";

const router = Router();
const userController = createUserController()

router.get(
  '/',
  JWTAuth,
  authorizeRoles(['Admin']),
  asyncHandler((req, res, next) => userController.findAll(req, res))
)

router.get(
  '/:id',
  JWTAuth,
  authorizeRoles(['Admin']),
  asyncHandler((req, res, next) => userController.findById(req, res))
)

router.post(
  '/',
  JWTAuth,
  authorizeRoles(['Admin']),
  validate(createUserSchema),
  asyncHandler((req, res, next) => userController.create(req, res))
)

router.put(
  '/:id',
  JWTAuth,
  authorizeRoles(['Admin']),
  asyncHandler((req, res, next) => userController.update(req, res))
)

router.patch(
  '/:id/status',
  JWTAuth,
  authorizeRoles(['Admin']),
  asyncHandler((req, res, next) => userController.changeStatus(req, res))
)

export default router;