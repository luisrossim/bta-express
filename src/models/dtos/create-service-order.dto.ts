import { z } from "zod";
import { createAssistanceSchema } from "./create-assistance.dto.js";

export const createServiceOrderSchema = z.object({
  cliente: z.object({
    id: z.number().positive(),
    nome: z.string()
  }),
  etapa: z.object({
    id: z.number().positive(),
    descricao: z.string()
  }),
  hasAutomacao: z.boolean(),
  hasOrcamentoBanco: z.boolean(),
  hasProjetoPlantio: z.boolean(),
  quantidadeSetores: z.number().optional().nullable(),
  assistencia: createAssistanceSchema
})

export type CreateServiceOrderDTO = z.infer<typeof createServiceOrderSchema>
