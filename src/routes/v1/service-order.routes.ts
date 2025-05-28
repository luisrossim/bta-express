import { Router } from "express";
import multer from 'multer'; 
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { assignUserToHistorySchema } from "@/models/dtos/assign-user-to-history.dto.js";
import { ServiceOrderController } from "@/controllers/service-order.controller.js";
import { createServiceOrderSchema } from "@/models/dtos/create-service-order.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { requestLimiter } from "@/middlewares/rate-limit.middleware.js";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage })
const serviceOrderController = new ServiceOrderController();


router.get(
  '/',
  asyncHandler((req, res, next) => serviceOrderController.findAll(req, res))
)

router.get(
  '/anexo/:attachmentId', 
  asyncHandler((req, res, next) => serviceOrderController.getSignedUrlToAttachment(req, res))
)

router.get(
  '/:id', 
  asyncHandler((req, res, next) => serviceOrderController.findById(req, res))
)

router.post(
  '/',
  validate(createServiceOrderSchema),
  asyncHandler((req, res, next) => serviceOrderController.create(req, res))
);

router.post(
  '/historico/atribuir', 
  validate(assignUserToHistorySchema), 
  asyncHandler((req, res, next) => serviceOrderController.assignUserToHistory(req, res))
)

router.post(
  '/historico/:historyId/concluir', 
  asyncHandler((req, res, next) => serviceOrderController.completeStage(req, res))
)

router.post(
  '/historico/:historyId/avancar',
  asyncHandler((req, res, next) => serviceOrderController.nextStage(req, res))
)

router.post(
  '/:id/anexar',
  requestLimiter,
  upload.single('image'),
  asyncHandler((req, res, next) => serviceOrderController.attachFile(req, res))
)

export default router;