import { z } from "zod";

export const createEtapaUsuarioSchema = z.object({
  etapaId: z.number().positive(),
  usuarioId: z.number().positive()
})

export type CreateEtapaUsuarioDTO = z.infer<typeof createEtapaUsuarioSchema>
