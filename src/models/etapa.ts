import { Etapa as EtapaPrisma, EtapaUsuario as EtapaUsuarioPrisma, Prisma } from "@prisma/client";
import { Medicao } from "./etapas/medicao.js";
import { InvalidArgumentsException } from "@/exceptions/invalid-arguments.js";
import { Projeto } from "./etapas/projeto.js";
import { Assistencia } from "./etapas/assistencia.js";
import { LancamentoOrcamento } from "./etapas/lancamento-orcamento.js";
import { AnaliseOrcamento } from "./etapas/analise-orcamento.js";
import { ApresentacaoProjeto } from "./etapas/apresentacao-projeto.js";
import { Negociacao } from "./etapas/negociacao.js";
import { PainelEletrico } from "./etapas/painel-eletrico.js";
import { SeparacaoEntrega } from "./etapas/separacao-entrega.js";
import { Montagem } from "./etapas/montagem.js";

export type Etapa = EtapaPrisma;
export type EtapaUsuario = EtapaUsuarioPrisma;
export type EtapaUsuarioCreateInput = Prisma.EtapaUsuarioCreateInput;

export class EtapaFactory {
  static create(etapaId: number) {
    switch(etapaId){
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

export enum EtapaEnum {
  MEDICAO = 1,
  PROJETO = 2,
  LANCAMENTO_ORCAMENTO = 3,
  ANALISE_ORCAMENTO = 4,
  APRESENTACAO_PROJETO = 5,
  NEGOCIACAO = 6,
  PAINEL_ELETRICO = 7,
  SEPARACAO_ENTREGA = 8,
  MONTAGEM = 9,
  ASSISTENCIA = 10
}