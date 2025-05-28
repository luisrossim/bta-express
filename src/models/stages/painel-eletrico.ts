import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { ServiceOrderStage } from "./abstract-stage.js";
import { StageEnum } from "../enums/stage.enum.js";
import { StageFactory } from "../stage.js";

export class PainelEletrico extends ServiceOrderStage {
  constructor(){
    super(StageEnum.PAINEL_ELETRICO)
  }

  next(): ServiceOrderStage {
    return StageFactory.create(StageEnum.SEPARACAO_ENTREGA)
  }

  previous(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}