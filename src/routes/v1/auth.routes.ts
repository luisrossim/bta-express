import { createAuthController } from "@/factories/auth-factory.js";
import { JWTAuth } from "@/middlewares/jwt.middleware.js";
import { requestLimiter } from "@/middlewares/rate-limit.middleware.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { authRequestSchema } from "@/models/dtos/auth.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { Router } from "express";

const router = Router();
const authController = createAuthController();

router.post(
  '/login',
  requestLimiter,
  validate(authRequestSchema),
  asyncHandler((req, res, next) => authController.login(req, res))
);

router.get(
  '/recover',
  requestLimiter,
  asyncHandler((req, res, next) => authController.refreshAccess(req, res))
)

router.post(
  '/logout',
  requestLimiter,
  asyncHandler((req, res, next) => authController.logoutAndClearCookies(req, res))
)

router.get(
  '/verify',
  JWTAuth,
  asyncHandler((req, res, next) => authController.checkAccess(req, res))
)

export default router;