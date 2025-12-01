import { z, ZodError } from "zod";

export const schema = z.object({
    COGNITO_CLIENT_ID: z.string().min(1),
    COGNITO_CLIENT_SECRET: z.string().min(1),
    MAIN_TABLE_NAME: z.string().min(1)
    
});

export const env = schema.parse(process.env);

// assim que for carregado, já vai ser executado.