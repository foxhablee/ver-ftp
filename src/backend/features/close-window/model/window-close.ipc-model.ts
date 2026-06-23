import { CreateIpcMethod } from '@/shared/ipc'

export const WINDOW_CLOSE_METHOD_CHANNEL = 'window:close' as const

export type WindowCloseMethod = CreateIpcMethod<{
    channel: typeof WINDOW_CLOSE_METHOD_CHANNEL
    props: { id: number }
    errors: 'not_exists'
}>
