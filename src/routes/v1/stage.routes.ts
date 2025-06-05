import { StageController } from "@/controllers/stage.controller.js";
import { authorizeRoles } from "@/middlewares/authorize-roles.middleware.js";
import { JWTAuth } from "@/middlewares/jwt.middleware.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { associateUserToStageSchema } from "@/models/dtos/associate-user-to-stage.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { Router } from "express";

const router = Router();
const stageController = new StageController();


router.get(
  '/vinculados',
  JWTAuth,
  asyncHandler((req, res, next) => stageController.findAssociatedUsers(req, res))
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
  '/vincular',
  JWTAuth,
  authorizeRoles(['Admin']),
  validate(associateUserToStageSchema), 
  asyncHandler((req, res, next) => stageController.associateUser(req, res))
)

router.post(
  '/desvincular',
  JWTAuth,
  authorizeRoles(['Admin']),
  validate(associateUserToStageSchema), 
  asyncHandler((req, res, next) => stageController.disassociateUser(req, res))
)

export default router; 