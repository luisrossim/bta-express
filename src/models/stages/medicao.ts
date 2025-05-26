import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { StageEnum } from "../enums/stage.enum.js";
import { StageFactory } from "../stage.js";
import { ServiceOrderStage } from "./abstract-stage.js";

export class Medicao extends ServiceOrderStage {
  constructor(){
    super(StageEnum.MEDICAO)
  }

  next(): ServiceOrderStage {
    return StageFactory.create(StageEnum.PROJETO)
  }

  previous(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}