import type { IpcMainInvokeEvent } from 'electron'
import { ExtractDataTypeFromIpcMethod, IpcError, IpcMethodLike } from '@/shared/ipc'

export function wrapIpcHandler<TMethod extends IpcMethodLike>(
    method: TMethod['method'],
    handler: (event: IpcMainInvokeEvent, args: TMethod['props']) => Promise<ExtractDataTypeFromIpcMethod<TMethod>>,
): (event: IpcMainInvokeEvent, args: TMethod['props']) => Promise<TMethod['response']> {
    return async (_event, _args) => {
        try {
            const data = await handler(_event, _args)
            return { ok: true, data }
        } catch (error) {
            if (error instanceof IpcError && error.code !== 'error') {
                return { ok: false, code: error.code, text: error.message }
            }

            console.error(`[ipc:${method}]`, error)

            return {
                ok: false,
                code: 'error',
                text: `Unhandled error in ipc method ${method}`,
            }
        }
    }
}
