import { Request, Response } from "express";
import { CustomerService } from "@/services/customer.service.js";
import { UtilsService } from "@/utils/utils.service.js";
import { CustomerDTO } from "@/models/dtos/customer.dto.js";

export class CustomerController {
  constructor(private customerService: CustomerService){}


  async create(req: Request, res: Response) {
    const dto: CustomerDTO = req.body;
    await this.customerService.create(dto);
    return res.status(201).send();
  }


  async update(req: Request, res: Response) {
    const { id } = req.params;
    const dto: CustomerDTO = req.body;

    const idNumber = UtilsService.parseParamToValidNumber(id);
    const customer = await this.customerService.update(idNumber, dto);

    return res.status(200).json(customer);
  }


  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const idNumber = UtilsService.parseParamToValidNumber(id);
    const customer = await this.customerService.findById(idNumber);
    
    return res.status(200).json(customer);
  }


  async findAll(req: Request, res: Response) {
    const customers = await this.customerService.findAll();

    if (customers.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(customers);
  }
}