import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { ServiceOrderStage } from "./abstract-stage.js";
import { StageEnum } from "../enums/stage.enum.js";

export class Assistencia extends ServiceOrderStage {
  constructor(){
    super(StageEnum.ASSISTENCIA)
  }

  next(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido avançar dessa etapa.');
  }

  previous(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.');
  }
}