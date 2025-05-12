import { z } from "zod";

export const createEnderecoSchema = z.object({
  clienteId: z.number().optional(),
  cidade: z.string(),
  estado: z.string(),
  coordenadasGeograficas: z.string().optional(),
  kmLojaCliente: z.number().optional(),
  referencia: z.string().optional(),
  descricao: z.string().optional()
})