import { z } from 'zod'

// схема env
const envSchema = z.object({
    VITE_APP_PORT: z.coerce.number().default(3000),
    VITE_APP_BACKEND_API: z.string(),
})

// парсим import.meta.env
const parsedEnv = envSchema.parse(import.meta.env)

// экспортируем удобный объект
export const env = {
    appPort: parsedEnv.VITE_APP_PORT,
    backendApi: parsedEnv.VITE_APP_BACKEND_API,
} as const