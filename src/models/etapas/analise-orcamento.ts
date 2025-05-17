import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { EtapaEnum, EtapaFactory } from "../etapa.js";
import { EtapaOrdemServico } from "./etapa-ordem-servico.js";

export class AnaliseOrcamento extends EtapaOrdemServico {
  constructor(){
    super(EtapaEnum.ANALISE_ORCAMENTO)
  }

  public next(): EtapaOrdemServico {
    return EtapaFactory.create(EtapaEnum.APRESENTACAO_PROJETO);
  }

  public previous(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}