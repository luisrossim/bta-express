import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { ServiceOrderStage } from "./abstract-stage.js";
import { StageEnum } from "../enums/stage.enum.js";
import { StageFactory } from "../stage.js";

export class Projeto extends ServiceOrderStage {
  constructor(){
    super(StageEnum.PROJETO)
  }

  next(): ServiceOrderStage {
    return StageFactory.create(StageEnum.LANCAMENTO_ORCAMENTO)
  }

  previous(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}