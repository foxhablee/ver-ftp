import { IpcMethod } from '@/shared/ipc/IpcMethod'
import { FsItem } from '@/shared/model'

export interface OkIpcResponse<T> {
    ok: true
    data: T
}

type IpcErrorText =
    | {
          text: string
      }
    | {
          /** @deprecated */
          errorText: string
      }

export type ErrorIpcResponse<TCode extends string = 'error'> = IpcErrorText & {
    ok: false
    code: TCode
}

export type IpcResponse<TReturnType = void, TErrorCodes extends string = 'error'> =
    | OkIpcResponse<TReturnType>
    | ErrorIpcResponse<TErrorCodes | 'error'>

type AssertResponseMap<T extends Record<IpcMethod, IpcResponse<unknown, string>>> = T

export type IpcResponseMap = AssertResponseMap<{
    'ftp:connect': IpcResponse<{ connectionId: string }>
    'ftp:get-list': IpcResponse<FsItem[]>
    'window:create': IpcResponse<undefined, 'not_exists'>
    'window:get-id': IpcResponse<number>
    'window:close': IpcResponse<void, 'not_found'>
}>
