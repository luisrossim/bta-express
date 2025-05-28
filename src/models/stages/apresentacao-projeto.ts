import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { ServiceOrderStage } from "./abstract-stage.js";
import { StageFactory } from "../stage.js";
import { StageEnum } from "../enums/stage.enum.js";

export class ApresentacaoProjeto extends ServiceOrderStage {
  constructor(){
    super(StageEnum.APRESENTACAO_PROJETO)
  }

  public next(): ServiceOrderStage {
    return StageFactory.create(StageEnum.NEGOCIACAO);
  }

  public previous(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}