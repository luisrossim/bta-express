import { z } from "zod";
import { createAddressSchema } from "./create-address.dto.js";

export const createCustomerSchema = z.object({
  nome: z.string().min(2),
  telefone: z.string(),
  cpf: z.string().length(11),
  endereco: z.object({
    create: createAddressSchema
  })
})

export type CreateCustomerDTO = z.infer<typeof createCustomerSchema>
