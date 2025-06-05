import { Etapa, EtapaUsuario, Prisma } from "@prisma/client";
import { Medicao } from "./stages/medicao.js";
import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { Projeto } from "./stages/projeto.js";
import { Assistencia } from "./stages/assistencia.js";
import { LancamentoOrcamento } from "./stages/lancamento-orcamento.js";
import { AnaliseOrcamento } from "./stages/analise-orcamento.js";
import { ApresentacaoProjeto } from "./stages/apresentacao-projeto.js";
import { Negociacao } from "./stages/negociacao.js";
import { PainelEletrico } from "./stages/painel-eletrico.js";
import { SeparacaoEntrega } from "./stages/separacao-entrega.js";
import { Montagem } from "./stages/montagem.js";
import { User } from "./user.js";

export type Stage = Etapa;
export type UserStage = EtapaUsuario;
export type CreateUserStage = Prisma.EtapaUsuarioCreateInput;

export class StageFactory {
  static create(stageId: number) {
    switch(stageId){
      case 1: 
        return new Medicao()
      case 2: 
        return new Projeto()
      case 3: 
        return new LancamentoOrcamento()
      case 4: 
        return new AnaliseOrcamento()
      case 5: 
        return new ApresentacaoProjeto()
      case 6: 
        return new Negociacao()
      case 7: 
        return new PainelEletrico()
      case 8: 
        return new SeparacaoEntrega()
      case 9: 
        return new Montagem()
      case 10: 
        return new Assistencia()
      default: 
        throw new InvalidArgumentsException('Erro ao vincular dados concretos da etapa');
    }
  }
}

export interface AssociatedUsers {
  stageId: number
  users: Partial<User>[]
}
