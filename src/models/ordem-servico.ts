import { OrdemServico as OrdemServicoPrisma, Prisma } from "@prisma/client";
import { Assistencia } from "./assistencia.js";
import { Cliente } from "./cliente.js";
import { HistoricoOS } from "./historico-ordem-servico.js";

export type OrdemServico = OrdemServicoPrisma;
export type OrdemServicoCreateInput = Prisma.OrdemServicoCreateInput;

export interface OrdemServicoWithIncludes extends OrdemServico {
  cliente?: Cliente
  assistencia?: Assistencia | null
  historicoOs?: HistoricoOS[]
}