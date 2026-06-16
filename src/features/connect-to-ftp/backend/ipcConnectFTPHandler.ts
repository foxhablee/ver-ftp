import { ConnectionItem } from '@/entities/connection-item'
import { IpcMainInvokeEvent } from 'electron'
import { openConnection } from '@/entities/connection-item/backend'
import { IpcResponseConnectFTP } from '../model/IpcResponseConnectFTP'

const connectionsMap = new Map<string, Awaited<ReturnType<typeof openConnection>>>()

export async function ipcConnectFTPHandler(
    _: IpcMainInvokeEvent,
    props: ConnectionItem,
): Promise<IpcResponseConnectFTP> {
    try {
        const id = crypto.randomUUID()
        openConnection(props).then((connection) => connectionsMap.set(id, connection))
        return { ok: true, data: { connectionId: id } }
    } catch (error) {
        console.error(error)
        return { ok: false, error: 'Error while create connection' }
    }
}
