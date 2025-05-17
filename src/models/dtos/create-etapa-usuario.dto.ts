import { z } from "zod";

export const createEtapaUsuarioSchema = z.object({
  etapaId: z.number().positive(),
  usuarioIds: z.array(z.number())
})

export type CreateEtapaUsuarioDTO = z.infer<typeof createEtapaUsuarioSchema>
