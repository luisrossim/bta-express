import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { StageEnum } from "../enums/stage.enum.js";
import { ServiceOrderStage } from "./abstract-stage.js";
import { StageFactory } from "../stage.js";

export class Negociacao extends ServiceOrderStage {
  constructor(){
    super(StageEnum.NEGOCIACAO)
  }

  public next(): ServiceOrderStage {
    return StageFactory.create(StageEnum.PAINEL_ELETRICO);
  }

  public previous(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}