import { Router } from "express";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { userHistoryAssignmentSchema } from "@/models/dtos/assign-user-to-history.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { createOrderHistoryController } from "@/factories/order-history-factory.js";
import { JWTAuth } from "@/middlewares/jwt.middleware.js";
import { commentsHistorySchema } from "@/models/dtos/comments-history.dto.js";
import { authorizeRoles } from "@/middlewares/authorize-roles.middleware.js";

const router = Router();
const orderHistoryController = createOrderHistoryController()


router.post(
  '/assign-user',
  validate(userHistoryAssignmentSchema),
  JWTAuth,
  authorizeRoles(['Admin']),
  asyncHandler((req, res, next) => orderHistoryController.assignUser(req, res))
)

router.post(
  '/remove-user',
  validate(userHistoryAssignmentSchema),
  JWTAuth,
  asyncHandler((req, res, next) => orderHistoryController.removeUser(req, res))
)

router.post(
  '/:historyId/complete',
  JWTAuth,
  asyncHandler((req, res, next) => orderHistoryController.completeStage(req, res))
)

router.post(
  '/:historyId/advance',
  JWTAuth,
  asyncHandler((req, res, next) => orderHistoryController.advanceStage(req, res))
)

router.patch(
  '/:historyId/comments',
  validate(commentsHistorySchema),
  JWTAuth,
  asyncHandler((req, res, next) => orderHistoryController.commentsStage(req, res))
)

export default router;