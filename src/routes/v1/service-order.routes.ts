import { Router } from "express";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { assignUserToHistorySchema } from "@/models/dtos/assign-user-to-history.dto.js";
import { ServiceOrderController } from "@/controllers/service-order.controller.js";
import { createServiceOrderSchema } from "@/models/dtos/create-service-order.dto.js";
import { createAssistanceSchema } from "@/models/dtos/create-assistance.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";

const router = Router();
const serviceOrderController = new ServiceOrderController();


router.get(
  '/',
  asyncHandler(serviceOrderController.findAll)
)

router.get(
  '/:id', 
  asyncHandler(serviceOrderController.findById)
)

router.post(
  '/',
  validate(createServiceOrderSchema),
  asyncHandler(serviceOrderController.create)
);

router.post(
  '/assistencia', 
  validate(createAssistanceSchema), 
  asyncHandler(serviceOrderController.createAssistance)
)

router.post(
  '/historico/atribuir', 
  validate(assignUserToHistorySchema), 
  asyncHandler(serviceOrderController.assignUserToHistory)
)

router.post(
  '/historico/:historyId/concluir', 
  asyncHandler(serviceOrderController.completeStage)
)

router.post(
  '/historico/:historyId/avancar', 
  asyncHandler(serviceOrderController.nextStage)
)

export default router;