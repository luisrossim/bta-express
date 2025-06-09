import { z } from "zod";

export const userHistoryAssignmentSchema = z.object({
  historyId: z.string().uuid(),
  userId: z.number().positive()
})

export type UserHistoryAssignmentDTO = z.infer<typeof userHistoryAssignmentSchema>
