import { z } from "zod";

const userSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  telefone: z.string(),
  role: z.object({
    id: z.number(),
    descricao: z.string().optional()
  })
})

export const createUserSchema = userSchema.extend({
  password: z.string().min(6, "A senha deve possuir pelo menos 6 caracteres"),
});

export type UserDTO = z.infer<typeof userSchema>
export type CreateUserDTO = z.infer<typeof createUserSchema>
