import { ConnectionItem } from '@/shared/model'
import { createFTPConnect, FTPConnection } from '@/shared/ftp/backend'
import type { IpcMainInvokeEvent } from 'electron'
import type { IpcResponse } from '@/shared/ipc'

export async function createConnection(options: ConnectionItem): Promise<FTPConnection> {
    return createFTPConnect({
        host: options.host,
        port: options.port,
        user: options.username,
        password: options.password,
        secure: options.protocol === 'ftps',
    })
}

export type IpcResponseConnectFTP = IpcResponse<{
    connectionId: string
}>

const connectionsMap = new Map<string, Awaited<ReturnType<typeof createConnection>>>()

export async function ipcHandlerFTPConnect(
    _: IpcMainInvokeEvent,
    connection: ConnectionItem,
): Promise<IpcResponseConnectFTP> {
    try {
        const id = crypto.randomUUID()
        createConnection(connection).then((c) => connectionsMap.set(id, c))
        return { ok: true, data: { connectionId: id } }
    } catch (error) {
        console.error(error)
        return { ok: false, error: 'Error while create connection' }
    }
}
