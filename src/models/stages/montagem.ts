import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { ServiceOrderStage } from "./abstract-stage.js";
import { StageEnum } from "../enums/stage.enum.js";

export class Montagem extends ServiceOrderStage {
  constructor(){
    super(StageEnum.MONTAGEM)
  }

  public next(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido avançar dessa etapa.')
  }

  public previous(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}