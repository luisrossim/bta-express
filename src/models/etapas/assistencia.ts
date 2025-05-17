import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { EtapaOrdemServico } from "./etapa-ordem-servico.js";
import { EtapaEnum } from "../etapa.js";

export class Assistencia extends EtapaOrdemServico {
  constructor(){
    super(EtapaEnum.ASSISTENCIA)
  }

  next(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido avançar dessa etapa.');
  }

  previous(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.');
  }
}