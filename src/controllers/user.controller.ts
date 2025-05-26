import { Request, Response } from "express";
import { UtilsService } from "@/utils/utils.service.js";
import { UserService } from "@/services/user.service.js";
import { CreateUserDTO } from "@/models/dtos/create-user.dto.js";

export class UserController {
  private readonly userService;


  constructor(){
    this.userService = new UserService();
  }


  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const idNumber = UtilsService.parseParamToValidNumber(id);
    const user = await this.userService.findById(idNumber);
    
    return res.status(200).json(user);
  }


  async create(req: Request, res: Response) {
    await this.userService.create(req.body);
    return res.status(201).send();
  }


  async update(req: Request, res: Response) {
    const { id } = req.params;
    const dto: CreateUserDTO = req.body;

    const idNumber = UtilsService.parseParamToValidNumber(id);
    const user = await this.userService.update(idNumber, dto);

    return res.status(200).json(user);
  }


  async findAll(req: Request, res: Response) {
    const users = await this.userService.findAll();

    if (users.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(users);
  }
}