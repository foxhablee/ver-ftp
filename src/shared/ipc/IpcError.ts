export interface ErrorIpcResponse<TCode extends string> {
    ok: false
    code: TCode
    errorText: string
}
