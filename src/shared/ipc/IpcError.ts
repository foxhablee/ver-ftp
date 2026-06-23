export class IpcError<TCode extends string = 'error'> extends Error {
    readonly code: TCode

    constructor(code: TCode, message: string, options?: { cause?: unknown }) {
        super(message, options)
        this.name = 'IpcError'
        this.code = code
    }
}
