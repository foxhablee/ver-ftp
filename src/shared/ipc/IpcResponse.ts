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
