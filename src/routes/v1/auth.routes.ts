import { AuthController } from "@/controllers/auth.controller.js";
import { authorizeRoles } from "@/middlewares/authorize-roles.middleware.js";
import { JWTAuth } from "@/middlewares/jwt.middleware.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { authRequestSchema } from "@/models/dtos/auth.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { Router } from "express";

const router = Router();
const authController = new AuthController();

router.post(
  '/login',
  validate(authRequestSchema),
  asyncHandler((req, res, next) => authController.login(req, res))
);

router.get(
  '/recover-access',
  asyncHandler((req, res, next) => authController.refreshAccess(req, res))
)

router.post(
  '/logout',
  asyncHandler((req, res, next) => authController.logoutAndClearCookies(req, res))
)

router.get(
  '/check-access',
  JWTAuth,
  authorizeRoles(["admin"]),
  asyncHandler((req, res, next) => authController.checkAccess(req, res))
)

export default router;