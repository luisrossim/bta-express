import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { EtapaEnum, EtapaFactory } from "../etapa.js";
import { EtapaOrdemServico } from "./etapa-ordem-servico.js";

export class ApresentacaoProjeto extends EtapaOrdemServico {
  constructor(){
    super(EtapaEnum.APRESENTACAO_PROJETO)
  }

  public next(): EtapaOrdemServico {
    return EtapaFactory.create(EtapaEnum.NEGOCIACAO);
  }

  public previous(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}