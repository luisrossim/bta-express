import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { EtapaEnum, EtapaFactory } from "../etapa.js";
import { EtapaOrdemServico } from "./etapa-ordem-servico.js";

export class SeparacaoEntrega extends EtapaOrdemServico {
  constructor(){
    super(EtapaEnum.SEPARACAO_ENTREGA)
  }

  public next(): EtapaOrdemServico {
    return EtapaFactory.create(EtapaEnum.MONTAGEM);
  }

  public previous(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}