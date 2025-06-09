import { Request, Response } from "express";
import { CreateServiceOrderDTO } from "@/models/dtos/service-order.dto.js";
import { ServiceOrderWithIncludes } from "@/models/order.js";
import { OrderService } from "@/services/order.service.js";

export class OrderController {
  private readonly orderService;

  constructor(){
    this.orderService = new OrderService();
  }


  async create(req: Request, res: Response) {
    const dto: CreateServiceOrderDTO = req.body;
    const order: ServiceOrderWithIncludes = await this.orderService.create(dto);
    return res.status(201).json(order);
  }


  async attachFile(req: Request, res: Response) {
    const { id } = req.params;
    const file = req.file;

    await this.orderService.attachFile(id, file);

    return res.status(200).send();
  }


  async getSignedUrlToAttachment(req: Request, res: Response){
    const { attachmentId } = req.params;
    const attachmentWithSignedUrl = await this.orderService.getSignedUrlToAttachment(attachmentId);
    return res.status(200).json(attachmentWithSignedUrl) 
  }


  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const order = await this.orderService.findById(id);
    return res.status(200).json(order);
  }

  
  async findAll(req: Request, res: Response) {
    const orders = await this.orderService.findAll();

    if (!orders || orders.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(orders);
  }
}