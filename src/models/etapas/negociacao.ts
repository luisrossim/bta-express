import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { EtapaEnum, EtapaFactory } from "../etapa.js";
import { EtapaOrdemServico } from "./etapa-ordem-servico.js";

export class Negociacao extends EtapaOrdemServico {
  constructor(){
    super(EtapaEnum.NEGOCIACAO)
  }

  public next(): EtapaOrdemServico {
    return EtapaFactory.create(EtapaEnum.PAINEL_ELETRICO);
  }

  public previous(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}