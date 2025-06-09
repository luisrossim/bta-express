import { z } from "zod";

export const createAddressSchema = z.object({
  cidade: z.string(),
  estado: z.string(),
  hectare: z.number().optional().nullable(),
  coordenadasGeograficas: z.string().optional().nullable(),
  kmLojaCliente: z.number().optional().nullable(),
  referencia: z.string().optional().nullable()
})