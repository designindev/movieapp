import { z } from 'zod';

export interface User {
    email: string;
    password: string;
}

export const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
