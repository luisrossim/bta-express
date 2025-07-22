import { HistoricoOS, Prisma } from "@prisma/client";
import { Stage } from "./stage.js";
import { User } from "./user.js";

export type OrderHistory = HistoricoOS;
export type CreateOrderHistory = Prisma.HistoricoOSCreateInput;

interface Atribuicao {
  usuario: User
}

export interface OrderHistoryWithIncludes extends OrderHistory {
  etapa?: Stage
  atribuicoes?: Atribuicao[]
}
