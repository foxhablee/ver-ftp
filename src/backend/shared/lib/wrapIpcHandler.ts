import type { IpcMainInvokeEvent } from 'electron'
import { IpcError, IpcMethod, IpcResponseMap } from '@/shared/ipc'

type IpcHandler<M extends IpcMethod, TArgs> = (
    event: IpcMainInvokeEvent,
    args: TArgs,
) => Promise<Extract<IpcResponseMap[M], { ok: true }>['data']>

export function wrapIpcHandler<M extends IpcMethod, TArgs>(
    method: M,
    handler: IpcHandler<M, TArgs>,
): (event: IpcMainInvokeEvent, args: TArgs) => Promise<IpcResponseMap[M]> {
    return async (_event, _args) => {
        try {
            const data = await handler(_event, _args)
            return { ok: true, data } as IpcResponseMap[M]
        } catch (error) {
            if (error instanceof IpcError && error.code !== 'error') {
                return { ok: false, code: error.code, text: error.message } as IpcResponseMap[M]
            }

            console.error(`[ipc:${method}]`, error)

            return {
                ok: false,
                code: 'error',
                text: `Unhandled error in ipc method ${method}`,
            } as IpcResponseMap[M]
        }
    }
}
