import { CreateIpcMethod } from '@/shared/ipc'

export const WINDOW_GET_ID_METHOD_CHANNEL = 'window:get-id' as const

export type WindowGetIdMethod = CreateIpcMethod<{
    channel: typeof WINDOW_GET_ID_METHOD_CHANNEL
    response: number
}>
