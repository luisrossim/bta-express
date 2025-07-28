import { createAuthController } from "@/factories/auth-factory.js";
import { JWTAuth } from "@/middlewares/jwt.middleware.js";
import { restrictRateLimiter } from "@/middlewares/rate-limit.middleware.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { authRequestSchema } from "@/models/dtos/auth.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { Router } from "express";

const router = Router();
const authController = createAuthController();

router.post(
  '/login',
  restrictRateLimiter,
  validate(authRequestSchema),
  asyncHandler((req, res, next) => authController.login(req, res))
);

router.get(
  '/recover',
  restrictRateLimiter,
  asyncHandler((req, res, next) => authController.refreshAccess(req, res))
)

router.post(
  '/logout',
  restrictRateLimiter,
  asyncHandler((req, res, next) => authController.logoutAndClearCookies(req, res))
)

router.get(
  '/me',
  JWTAuth,
  asyncHandler((req, res, next) => authController.checkAccess(req, res))
)

export default router;