import { Request, Response } from "express";
import { UtilsService } from "@/utils/utils.service.js";
import { StageService } from "@/services/stage.service.js";
import { AssociateUsersToStageDTO } from "@/models/dtos/associate-user-to-stage.dto.js";

export class StageController {
  private readonly stageService;


  constructor(){
    this.stageService = new StageService();
  }


  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const idNumber = UtilsService.parseParamToValidNumber(id);
    const stage = await this.stageService.findById(idNumber);
    
    return res.status(200).json(stage);
  }


  async findAssociatedUsers(req: Request, res: Response) {
    const associated = await this.stageService.findAssociatedUsers();
    return res.status(200).json(associated);
  }


  async associateUsers(req: Request, res: Response) {
    const dto: AssociateUsersToStageDTO = req.body;
    await this.stageService.associateUsers(dto.stageId, dto.usersId);
    return res.status(200).send(); 
  }


  async findAll(req: Request, res: Response) {
    const stages = await this.stageService.findAll();

    if (stages.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(stages);
  }
}