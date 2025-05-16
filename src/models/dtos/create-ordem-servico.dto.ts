import { z } from "zod";

export const createOrdemServicoSchema = z.object({
  clienteId: z.number().positive(),
  etapaId: z.number(),
  hasAutomacao: z.boolean(),
  hasOrcamentoBanco: z.boolean(),
  hasProjetoPlantio: z.boolean(),
  quantidadeSetores: z.number().optional().nullable()
})

export type CreateOrdemServicoDTO = z.infer<typeof createOrdemServicoSchema>
