import { StageController } from "@/controllers/stage.controller.js";
import { validate } from "@/middlewares/validate-dto.middleware.js";
import { associateUsersToStageSchema } from "@/models/dtos/associate-user-to-stage.dto.js";
import { asyncHandler } from "@/utils/async-handler.js";
import { Router } from "express";

const router = Router();
const stageController = new StageController();


router.get(
  '/vinculados', 
  asyncHandler(stageController.findAssociatedUsers)
)

router.get(
  '/', 
  asyncHandler(stageController.findAll)
)

router.get(
  '/:id', 
  asyncHandler(stageController.findById)
) 

router.post(
  '/vincular', 
  validate(associateUsersToStageSchema), 
  asyncHandler(stageController.associateUsers)
)

export default router; 