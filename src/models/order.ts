import { OrdemServico, Prisma } from "@prisma/client";
import { OrderHistory } from "./order-history.js";
import { Customer } from "./customer.js";
import { Attachment } from "./attachment.js";
import { User } from "./user.js";

export type ServiceOrder = OrdemServico;
export type CreateServiceOrder = Prisma.OrdemServicoCreateInput;

export interface ServiceOrderWithIncludes extends ServiceOrder {
  cliente?: Partial<Customer>
  historicoOs?: Partial<OrderHistory>[]
  anexos?: Attachment[]
  concluidoPor?: User
}

// SEPARAR POR DTOs