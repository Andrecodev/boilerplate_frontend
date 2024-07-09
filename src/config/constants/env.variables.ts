export const config = {
  AUTH_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
  AUTH_GOOGLE_CLIENT_SECRET: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
  JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET || '',
  SALT_ROUNDS: process.env.NEXT_PUBLIC_SALT_ROUNDS || '',
}
