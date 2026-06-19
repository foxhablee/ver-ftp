import type { IpcMainInvokeEvent } from 'electron'
import { openConnection } from '@/entities/connection-item/backend'
import type { IpcResponseConnectFTP } from '../model/contract'
import { ConnectionItem } from '@/shared/model'

const connectionsMap = new Map<string, Awaited<ReturnType<typeof openConnection>>>()

export async function ipcHandlerOpenConnection(
    _: IpcMainInvokeEvent,
    connection: ConnectionItem,
): Promise<IpcResponseConnectFTP> {
    try {
        const id = crypto.randomUUID()
        openConnection(connection).then((c) => connectionsMap.set(id, c))
        return { ok: true, data: { connectionId: id } }
    } catch (error) {
        console.error(error)
        return { ok: false, error: 'Error while create connection' }
    }
}
