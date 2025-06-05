import { z } from "zod";

export const authRequestSchema = z.object({
  login: z.string().email(),
  password: z.string()
})

export type AuthRequest = z.infer<typeof authRequestSchema>

export interface AuthResponse {
  login: string
  role: string
  accessToken: string
  refreshToken: string
}