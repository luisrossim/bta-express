import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { ServiceOrderStage } from "./abstract-stage.js";
import { StageEnum } from "../enums/stage.enum.js";
import { StageFactory } from "../stage.js";

export class SeparacaoEntrega extends ServiceOrderStage {
  constructor(){
    super(StageEnum.SEPARACAO_ENTREGA)
  }

  public next(): ServiceOrderStage {
    return StageFactory.create(StageEnum.MONTAGEM);
  }

  public previous(): ServiceOrderStage {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}