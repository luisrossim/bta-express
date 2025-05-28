import { Request, Response } from "express";
import { ServiceOrderService } from "@/services/service-order.service.js";
import { CreateServiceOrderDTO } from "@/models/dtos/create-service-order.dto.js";
import { AssignUserToHistoryDTO } from "@/models/dtos/assign-user-to-history.dto.js";

export class ServiceOrderController {
  private readonly serviceOrderService;

  constructor(){
    this.serviceOrderService = new ServiceOrderService();
  }


  async create(req: Request, res: Response) {
    const dto: CreateServiceOrderDTO = req.body;
    await this.serviceOrderService.create(dto);
    return res.status(201).send();
  }


  async completeStage(req: Request, res: Response) {
    const { historyId } = req.params;
    await this.serviceOrderService.completeStage(historyId);
    return res.status(200).send();
  }


  async nextStage(req: Request, res: Response){
    const { historyId } = req.params;
    await this.serviceOrderService.nextStage(historyId)
    return res.status(200).send();
  }


  async assignUserToHistory(req: Request, res: Response) {
    const dto: AssignUserToHistoryDTO = req.body;
    await this.serviceOrderService.assignUserToHistory(dto);
    return res.status(200).send();
  }


  async attachFile(req: Request, res: Response) {
    const { id } = req.params;
    const file = req.file;

    await this.serviceOrderService.attachFile(id, file);

    return res.status(200).send();
  }


  async getSignedUrlToAttachment(req: Request, res: Response){
    const { attachmentId } = req.params;
    const attachmentWithSignedUrl = await this.serviceOrderService.getSignedUrlToAttachment(attachmentId);
    return res.status(200).json(attachmentWithSignedUrl) 
  }


  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const order = await this.serviceOrderService.findServiceOrderById(id);
    return res.status(200).json(order);
  }

  
  async findAll(req: Request, res: Response) {
    const orders = await this.serviceOrderService.findAll();

    if (!orders || orders.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(orders);
  }
}