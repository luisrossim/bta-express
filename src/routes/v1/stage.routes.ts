import { StageController } from "@/controllers/stage.controller.js";
import { authorizeRoles } from "@/middlewares/authorize-roles.middleware.js";
import { JWTAuth } from "@/middlewares/jwt.middleware.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { associatedSchema } from "@/models/dtos/associate-user-to-stage.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { Router } from "express";

const router = Router();
const stageController = new StageController();


router.get(
  '/associated',
  JWTAuth,
  asyncHandler((req, res, next) => stageController.findAssociated(req, res))
)

router.get(
  '/',
  JWTAuth,
  asyncHandler((req, res, next) => stageController.findAll(req, res))
)

router.get(
  '/:id',
  JWTAuth,
  asyncHandler((req, res, next) => stageController.findById(req, res))
) 

router.post(
  '/associate',
  JWTAuth,
  authorizeRoles(['Admin']),
  validate(associatedSchema), 
  asyncHandler((req, res, next) => stageController.associate(req, res))
)

router.post(
  '/disassociate',
  JWTAuth,
  authorizeRoles(['Admin']),
  validate(associatedSchema), 
  asyncHandler((req, res, next) => stageController.disassociate(req, res))
)

export default router; 