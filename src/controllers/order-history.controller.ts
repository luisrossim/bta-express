import { Request, Response } from "express";
import { UserHistoryAssignmentDTO } from "@/models/dtos/assign-user-to-history.dto.js";
import { OrderHistoryService } from "@/services/order-history.service.js";

export class OrderHistoryController {
  private readonly orderService;

  constructor(){
    this.orderService = new OrderHistoryService();
  }

  async completeStage(req: Request, res: Response) {
    const { historyId } = req.params;
    await this.orderService.completeStage(historyId);
    return res.status(200).send();
  }


  async advanceStage(req: Request, res: Response){
    const { historyId } = req.params;
    await this.orderService.advance(historyId)
    return res.status(200).send();
  }


  async assignUser(req: Request, res: Response) {
    const dto: UserHistoryAssignmentDTO = req.body;
    await this.orderService.assignUser(dto);
    return res.status(200).send();
  }


  async removeUser(req: Request, res: Response) {
    const dto: UserHistoryAssignmentDTO = req.body;
    await this.orderService.removeUser(dto);
    return res.status(200).send();
  }
}