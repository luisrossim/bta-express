import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { EtapaOrdemServico } from "./etapa-ordem-servico.js";
import { EtapaEnum, EtapaFactory } from "../etapa.js";

export class Projeto extends EtapaOrdemServico {
  constructor(){
    super(EtapaEnum.PROJETO)
  }

  next(): EtapaOrdemServico {
    return EtapaFactory.create(EtapaEnum.LANCAMENTO_ORCAMENTO)
  }

  previous(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}