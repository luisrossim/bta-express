import { z } from "zod";

export const createClienteDTO = z.object({
  nome: z.string().min(2),
  telefone: z.string(),
  cpf: z.string().length(11)
})

export type CreateClienteDTO = z.infer<typeof createClienteDTO>
