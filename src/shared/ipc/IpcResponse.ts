import { IpcMethodLike } from '@/shared/ipc/IpcMethod'

export interface OkIpcResponse<T extends object | void> {
    ok: true
    data: T
}

export type ErrorIpcResponse<TCode extends string> = {
    ok: false
    code: TCode
    text: string
}

export type IpcResponse<TReturnType extends object | void, TErrorCodes extends string> =
    | OkIpcResponse<TReturnType>
    | ErrorIpcResponse<TErrorCodes>

export type ExtractReturnTypeFromIpcMethod<TMethod extends IpcMethodLike> = Extract<
    TMethod['response'],
    { ok: true }
>['data']
