import { HistoricoOS as HistoricoOSPrisma, Prisma } from "@prisma/client";

export type HistoricoOS = HistoricoOSPrisma;
export type HistoricoOSCreateInput = Prisma.HistoricoOSCreateInput;

const historicoInclude = {
  etapa: true
};

export type HistoricoOsWithIncludes = Prisma.HistoricoOSGetPayload<{
  include: typeof historicoInclude;
}>;