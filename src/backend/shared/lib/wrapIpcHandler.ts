import type { IpcMainInvokeEvent } from 'electron'
import { IpcError, IpcResponse } from '@/shared/ipc'

type IpcHandler<TArgs, TData> = (event: IpcMainInvokeEvent, args: TArgs) => Promise<TData>

export function wrapIpcHandler<TArgs extends object | void, TData extends unknown | void, TCode extends string>(
    method: string,
    handler: IpcHandler<TArgs, TData>,
): (event: IpcMainInvokeEvent, args: TArgs) => Promise<IpcResponse<TData, TCode>> {
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
