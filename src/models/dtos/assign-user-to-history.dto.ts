import { z } from "zod";

export const assignUserToHistorySchema = z.object({
  historyId: z.string().uuid(),
  userId: z.number().positive()
})

export type AssignUserToHistoryDTO = z.infer<typeof assignUserToHistorySchema>
