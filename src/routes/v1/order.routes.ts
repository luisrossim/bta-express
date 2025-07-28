import { Router } from "express";
import multer from 'multer'; 
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { assistanceSchema, createOrderSchema, measurementSchema } from "@/models/dtos/order.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { restrictRateLimiter } from "@/middlewares/rate-limit.middleware.js";
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
  validate(createOrderSchema),
  asyncHandler((req, res, next) => orderController.create(req, res))
)

router.patch(
  '/:id/measurement',
  JWTAuth,
  validate(measurementSchema),
  asyncHandler((req, res, next) => orderController.measurement(req, res))
)

router.patch(
  '/:id/assistance',
  JWTAuth,
  validate(assistanceSchema),
  asyncHandler((req, res, next) => orderController.assistance(req, res))
)

router.post(
  '/:id/attachment',
  restrictRateLimiter,
  JWTAuth,
  upload.single('file'),
  asyncHandler((req, res, next) => orderController.attachFile(req, res))
)

export default router;