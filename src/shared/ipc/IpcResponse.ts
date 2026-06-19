import { IpcMethod } from '@/shared/ipc/IpcMethod'

export interface OkIpcResponse<T> {
    ok: true
    data: T
}

export interface ErrorIpcResponse<TCode extends string> {
    ok: false
    code: TCode
    errorText: string
}

export type IpcResponse<TReturnType, TErrorCodes extends string> =
    | OkIpcResponse<TReturnType>
    | ErrorIpcResponse<TErrorCodes>

type AssertResponseMap<T extends Record<IpcMethod, IpcResponse<unknown, string>>> = T

export type IpcResponseMap = AssertResponseMap<{
    'ftp:connect': IpcResponse<{ connectionId: string }, 'error'>
}>
