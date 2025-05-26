import { OrdemServico, Prisma } from "@prisma/client";
import { Assistance } from "./assistance.js";
import { ServiceOrderHistory } from "./service-order-history.js";
import { Customer } from "./customer.js";

export type ServiceOrder = OrdemServico;
export type CreateServiceOrder = Prisma.OrdemServicoCreateInput;

export interface ServiceOrderWithIncludes extends ServiceOrder {
  cliente?: Customer
  assistencia?: Assistance | null
  historicoOs?: ServiceOrderHistory[]
}