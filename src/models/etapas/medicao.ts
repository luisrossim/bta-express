import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { EtapaOrdemServico } from "./etapa-ordem-servico.js";
import { EtapaEnum, EtapaFactory } from "../etapa.js";

export class Medicao extends EtapaOrdemServico {
  constructor(){
    super(EtapaEnum.MEDICAO)
  }

  next(): EtapaOrdemServico {
    return EtapaFactory.create(EtapaEnum.PROJETO)
  }

  previous(): EtapaOrdemServico {
    throw new InvalidArgumentsException('Não é permitido retornar dessa etapa.')
  }
}