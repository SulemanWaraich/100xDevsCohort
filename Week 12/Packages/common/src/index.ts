import {z} from 'zod';

export const input = z.object({
  
  username: z.string(),
  password: z.string(),
})

export type signupParams = z.infer<typeof input>
