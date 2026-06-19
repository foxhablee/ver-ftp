import { createConnection } from '@/backend/features/ftp-connect'

export const connectionsMap = new Map<string, Awaited<ReturnType<typeof createConnection>>>()
