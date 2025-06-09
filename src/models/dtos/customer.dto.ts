import { z } from "zod";
import { createAddressSchema } from "./address.dto.js";

export const customerSchema = z.object({
  nome: z.string().min(2),
  telefone: z.string(),
  cpf: z.string().length(11),
  endereco: createAddressSchema
})

export type CustomerDTO = z.infer<typeof customerSchema>
