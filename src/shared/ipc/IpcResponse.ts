export interface OkIpcResponse<T> {
    ok: true
    data: T
}

export type ErrorIpcResponse<TCode extends string = 'error'> = {
    ok: false
    code: TCode
    text: string
}

export type IpcResponse<TReturnType = void, TErrorCodes extends string = 'error'> =
    | OkIpcResponse<TReturnType>
    | ErrorIpcResponse<TErrorCodes | 'error'>
