import { z } from "zod";
import { createEnderecoSchema } from "./create-endereco.dto.js";

export const createClienteSchema = z.object({
  nome: z.string().min(2),
  telefone: z.string(),
  cpf: z.string().length(11),
  enderecos: z.object({
    create: createEnderecoSchema
  }).optional()
})

export type CreateClienteDTO = z.infer<typeof createClienteSchema>
