import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { StageEnum } from "../enums/stage.enum.js";
import { ServiceOrderStage } from "./abstract-stage.js";
import { StageFactory } from "../stage.js";

export class LancamentoOrcamento extends ServiceOrderStage {
  constructor(){
    super(StageEnum.LANCAMENTO_ORCAMENTO)
  }

  public next(): ServiceOrderStage {
    return StageFactory.create(StageEnum.ANALISE_ORCAMENTO);
  }

  public previous(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}