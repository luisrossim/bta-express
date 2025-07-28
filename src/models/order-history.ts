import { HistoricoOS, Prisma } from "@prisma/client";
import { Stage } from "./stage.js";

export type OrderHistory = HistoricoOS;
export type CreateOrderHistory = Prisma.HistoricoOSCreateInput;

export type AtribuicaoComUsuario = Prisma.AtribuicaoGetPayload<{
  include: { usuario: true }
}>

export interface OrderHistoryWithIncludes extends OrderHistory {
  etapa?: Stage
  atribuicoes?: AtribuicaoComUsuario[]
}
