import { Router } from "express";
import multer from 'multer'; 
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { createServiceOrderSchema } from "@/models/dtos/service-order.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { requestLimiter } from "@/middlewares/rate-limit.middleware.js";
import { JWTAuth } from "@/middlewares/jwt.middleware.js";
import { createOrderController } from "@/factories/order-factory.js";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage })
const orderController = createOrderController()


router.get(
  '/',
  JWTAuth,
  asyncHandler((req, res, next) => orderController.findAll(req, res))
)

router.get(
  '/attachment/:attachmentId',
  JWTAuth,
  asyncHandler((req, res, next) => orderController.getSignedUrlToAttachment(req, res))
)

router.get(
  '/:id',
  JWTAuth,
  asyncHandler((req, res, next) => orderController.findById(req, res))
)

router.post(
  '/',
  JWTAuth,
  validate(createServiceOrderSchema),
  asyncHandler((req, res, next) => orderController.create(req, res))
)

router.post(
  '/:id/attachment',
  requestLimiter,
  JWTAuth,
  upload.single('image'),
  asyncHandler((req, res, next) => orderController.attachFile(req, res))
)

export default router;