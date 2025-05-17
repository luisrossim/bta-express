import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { EtapaOrdemServico } from "./etapa-ordem-servico.js";
import { EtapaEnum, EtapaFactory } from "../etapa.js";

export class PainelEletrico extends EtapaOrdemServico {
  constructor(){
    super(EtapaEnum.PAINEL_ELETRICO)
  }

  next(): EtapaOrdemServico {
    return EtapaFactory.create(EtapaEnum.SEPARACAO_ENTREGA)
  }

  previous(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}