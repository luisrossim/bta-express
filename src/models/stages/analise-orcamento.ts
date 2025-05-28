import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { StageEnum } from "../enums/stage.enum.js";
import { ServiceOrderStage } from "./abstract-stage.js";
import { StageFactory } from "../stage.js";

export class AnaliseOrcamento extends ServiceOrderStage {
  constructor(){
    super(StageEnum.ANALISE_ORCAMENTO)
  }

  public next(): ServiceOrderStage {
    return StageFactory.create(StageEnum.APRESENTACAO_PROJETO);
  }

  public previous(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}