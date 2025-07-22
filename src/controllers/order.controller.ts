import { Request, Response } from "express";
import { CreateServiceOrderDTO } from "@/models/dtos/order.dto.js";
import { ServiceOrderWithIncludes } from "@/models/order.js";
import { OrderService } from "@/services/order.service.js";
import { OrderFilters, orderFiltersSchema } from "@/models/dtos/order-filters.js";

export class OrderController {
  constructor(private orderService: OrderService){}


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

  async measurement(req: Request, res: Response) {
    const { id } = req.params;
    const dto = req.body;

    await this.orderService.measurement(id, dto);
    return res.status(200).send();
  }

  async assistance(req: Request, res: Response) {
    const { id } = req.params;
    const dto = req.body;

    await this.orderService.assistance(id, dto);
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
    const filters: OrderFilters = req.query;

    const parsedFilters = orderFiltersSchema.parse(filters);

    const orders = await this.orderService.findAll(parsedFilters);

    if (!orders || orders.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(orders);
  }
}