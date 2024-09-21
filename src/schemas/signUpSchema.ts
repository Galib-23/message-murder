import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be minimum 2 chars")
  .max(20, "username must be within 20 chars")
  .regex(/^[a-zA-Z0-9_ ]*$/, "username can't contain any special characters");


export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({message: "Invalid Email"}),
  password: z.string().min(6, { message: "pass must be 6 chars"})
})