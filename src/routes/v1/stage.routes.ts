import { StageController } from "@/controllers/stage.controller.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { associateUsersToStageSchema } from "@/models/dtos/associate-user-to-stage.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { Router } from "express";

const router = Router();
const stageController = new StageController();


router.get(
  '/vinculados',
  asyncHandler((req, res, next) => stageController.findAssociatedUsers(req, res))
)

router.get(
  '/',
  asyncHandler((req, res, next) => stageController.findAll(req, res))
)

router.get(
  '/:id', 
  asyncHandler((req, res, next) => stageController.findById(req, res))
) 

router.post(
  '/vincular', 
  validate(associateUsersToStageSchema), 
  asyncHandler((req, res, next) => stageController.associateUsers(req, res))
)

export default router; 