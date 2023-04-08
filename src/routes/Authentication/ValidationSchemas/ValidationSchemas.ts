import { z } from "zod";

export const registerUserSchema = z.object({
    firstName: z.string().min(3).max(60),
    lastName: z.string().min(3).max(60),
    email: z.string().min(3).max(255).email(),
    password: z.string().min(8).max(80),
    confirmPassword: z.string().min(8).max(80),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirmPassword'],
        });
    }
});