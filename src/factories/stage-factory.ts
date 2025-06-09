import { StageController } from "@/controllers/stage.controller.js";
import { StageRepository } from "@/repositories/stage.repository.js";
import { StageService } from "@/services/stage.service.js";

export function createStageController() {
   const stageRepository = new StageRepository();
   const stageService = new StageService(stageRepository);
   return new StageController(stageService)
}