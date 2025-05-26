import { HistoricoOS, Prisma } from "@prisma/client";

export type ServiceOrderHistory = HistoricoOS;
export type CreateServiceOrderHistory = Prisma.HistoricoOSCreateInput;

const HistoryIncludeParams = {
  etapa: true
};

export type HistoryWithIncludes = Prisma.HistoricoOSGetPayload<{
  include: typeof HistoryIncludeParams;
}>;