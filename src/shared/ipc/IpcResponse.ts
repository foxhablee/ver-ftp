import { IpcMethodLike } from '@/shared/ipc/IpcMethod'

export interface OkIpcResponse<T extends unknown | void> {
    ok: true
    data: T
}

export type ErrorIpcResponse<TCode extends string> = {
    ok: false
    code: TCode
    text: string
}

export type IpcResponse<TReturnType extends unknown | void, TErrorCodes extends string> =
    | OkIpcResponse<TReturnType>
    | ErrorIpcResponse<TErrorCodes>

export type ExtractDataTypeFromIpcMethod<TMethod extends IpcMethodLike> = Extract<
    TMethod['response'],
    { ok: true }
>['data']
