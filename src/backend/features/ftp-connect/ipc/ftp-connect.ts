import { ConnectionItem } from '@/shared/model'
import type { IpcMainInvokeEvent } from 'electron'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'
import { connectionsMap } from '@/backend/shared/api'
import { createConnection } from '@/backend/features/ftp-connect'

export async function ipcHandlerFTPConnect(
    _: IpcMainInvokeEvent,
    connection: ConnectionItem,
): Promise<IpcResponseMap[typeof IPC_METHODS.FTP_CONNECT]> {
    try {
        const id = crypto.randomUUID()

        const newConnection = await createConnection(connection)
        connectionsMap.set(id, newConnection)

        return { ok: true, data: { connectionId: id } }
    } catch (error) {
        console.error(error)
        return { ok: false, code: 'error', errorText: 'Error while create connection' }
    }
}
