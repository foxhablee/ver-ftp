import { CreateIpcMethod } from '@/shared/ipc'
import { IpcCreateSubwindowProps } from '@/shared/model'

export const WINDOW_CREATE_METHOD_CHANNEL = 'window:create' as const

export type WindowCreateMethod = CreateIpcMethod<{
    channel: typeof WINDOW_CREATE_METHOD_CHANNEL
    props: IpcCreateSubwindowProps
    response: undefined
    errors: 'not_exists'
}>
