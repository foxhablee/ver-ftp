import { IpcMethodsMap } from '@/shared/ipc/IpcMethod'
import { ErrorIpcResponse } from '@/shared/ipc/IpcError'

export interface OkIpcResponse<T> {
    ok: true
    data: T
}

export type IpcResponse<TReturnType, TErrorCodes extends string> =
    | OkIpcResponse<TReturnType>
    | ErrorIpcResponse<TErrorCodes>

export type IpcResponseMap = {
    [Key in IpcMethodsMap['FTP_CONNECT']]: IpcResponse<{ connectionId: string }, 'error'>
}
