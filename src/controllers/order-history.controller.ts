import { Request, Response } from "express";
import { UserHistoryAssignmentDTO } from "@/models/dtos/assign-user-to-history.dto.js";
import { OrderHistoryService } from "@/services/order-history.service.js";

export class OrderHistoryController {
  constructor(private orderHistoryService: OrderHistoryService){}

  async completeStage(req: Request, res: Response) {
    const { historyId } = req.params;
    await this.orderHistoryService.completeStage(historyId);
    return res.status(200).send();
  }


  async advanceStage(req: Request, res: Response){
    const { historyId } = req.params;
    await this.orderHistoryService.advance(historyId)
    return res.status(200).send();
  }


  async assignUser(req: Request, res: Response) {
    const dto: UserHistoryAssignmentDTO = req.body;
    await this.orderHistoryService.assignUser(dto);
    return res.status(200).send();
  }


  async removeUser(req: Request, res: Response) {
    const dto: UserHistoryAssignmentDTO = req.body;
    await this.orderHistoryService.removeUser(dto);
    return res.status(200).send();
  }
}