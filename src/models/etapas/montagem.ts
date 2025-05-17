import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { EtapaEnum } from "../etapa.js";
import { EtapaOrdemServico } from "./etapa-ordem-servico.js";

export class Montagem extends EtapaOrdemServico {
  constructor(){
    super(EtapaEnum.MONTAGEM)
  }

  public next(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido avançar dessa etapa.')
  }

  public previous(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}