import { Router } from "express";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { userHistoryAssignmentSchema } from "@/models/dtos/assign-user-to-history.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { OrderHistoryController } from "@/controllers/order-history.controller.js";

const router = Router();
const orderHistoryController = new OrderHistoryController();


router.post(
  '/assign-user',
  validate(userHistoryAssignmentSchema), 
  asyncHandler((req, res, next) => orderHistoryController.assignUser(req, res))
)

router.post(
  '/remove-user',
  validate(userHistoryAssignmentSchema), 
  asyncHandler((req, res, next) => orderHistoryController.removeUser(req, res))
)

router.post(
  '/:historyId/complete',
  asyncHandler((req, res, next) => orderHistoryController.completeStage(req, res))
)

router.post(
  '/:historyId/advance',
  asyncHandler((req, res, next) => orderHistoryController.advanceStage(req, res))
)

export default router;