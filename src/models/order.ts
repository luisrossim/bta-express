import { OrdemServico, Prisma } from "@prisma/client";
import { ServiceOrderHistory } from "./order-history.js";
import { Customer } from "./customer.js";
import { Attachment } from "./attachment.js";

export type ServiceOrder = OrdemServico;
export type CreateServiceOrder = Prisma.OrdemServicoCreateInput;

export interface ServiceOrderWithIncludes extends ServiceOrder {
  cliente?: Partial<Customer>
  historicoOs?: Partial<ServiceOrderHistory>[]
  anexos?: Attachment[]
}

// SEPARAR POR DTOs