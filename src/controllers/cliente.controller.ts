import { Request, Response } from "express";
import { CreateClienteDTO } from "#models/dtos/create-cliente.dto.js";
import { ClienteService } from "#services/cliente.service.js";
import { UtilsService } from "#utils/utils.service.js";

export class ClienteController {
  private readonly clienteService;


  constructor(){
    this.clienteService = new ClienteService();
  }


  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const idNumber = UtilsService.parseParamToValidNumber(id);

    const cliente = await this.clienteService.findById(idNumber);
    
    return res.status(200).json(cliente);
  }


  async create(req: Request, res: Response) {
    await this.clienteService.create(req.body);
    return res.status(201).send();
  }


  async update(req: Request, res: Response) {
    const { id } = req.params;
    const dto: CreateClienteDTO = req.body;

    const idNumber = UtilsService.parseParamToValidNumber(id);

    const cliente = await this.clienteService.update(idNumber, dto);

    return res.status(200).json(cliente);
  }


  async findAll(req: Request, res: Response) {
    const clientes = await this.clienteService.findAll();

    if (!clientes || clientes.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(clientes);
  }
}