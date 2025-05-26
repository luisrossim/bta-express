import { z } from "zod";

export const createUserSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  telefone: z.string(),
  role: z.object({
    connect: z.object({
      id: z.number()
    })
  })
})

export type CreateUserDTO = z.infer<typeof createUserSchema>
