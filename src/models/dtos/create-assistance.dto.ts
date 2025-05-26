import { z } from "zod";

export const createAssistanceSchema = z.object({
  ordemServicoId: z.string(),
  problema: z.string(),
  tipoEnergiaId: z.number(),
  motobombaId: z.number(),
  polegadasValvulasRegistro: z.number(),
  diametroAdutoraMestre: z.string(),
  observacoes: z.string().optional().nullable()
})

export type CreateAssistanceDTO = z.infer<typeof createAssistanceSchema>
