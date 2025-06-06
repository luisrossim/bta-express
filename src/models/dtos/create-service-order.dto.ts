import { z } from "zod";

export const createServiceOrderSchema = z.object({
  clienteId: z.number().positive(),
  etapaId: z.number().positive(),
  hasAutomacao: z.boolean().optional().nullable(),
  hasOrcamentoBanco: z.boolean().optional().nullable(),
  hasProjetoPlantio: z.boolean().optional().nullable(),
  quantidadeSetores: z.number().positive().optional().nullable(),
  problema: z.string().optional().nullable(),
  tipoEnergiaId: z.number().optional().nullable(),
  motobombaId: z.number().optional().nullable(),
  polegadasValvulasRegistro: z.number().optional().nullable(),
  diametroAdutoraMestre: z.string().optional().nullable(),
  observacoes: z.string().optional().nullable()
})

export type CreateServiceOrderDTO = z.infer<typeof createServiceOrderSchema>
