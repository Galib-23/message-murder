import { z } from "zod";


export const signInSchema = z.object({
  identifier: z.string(), // basically username
  password: z.string(),
})