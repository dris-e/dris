import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email().min(1).max(255),
  name: z.string().max(255).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CreateUserSchema = UserSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const UpdateUserSchema = UserSchema.omit({ id: true, createdAt: true, updatedAt: true }).partial();

export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
