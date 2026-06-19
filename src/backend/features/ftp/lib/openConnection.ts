import { ConnectionItem } from '@/shared/model'
import { createFTPConnect, FTPConnection } from '@/shared/ftp/backend'
import type { IpcMainInvokeEvent } from 'electron'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'

export async function createConnection(options: ConnectionItem): Promise<FTPConnection> {
    return createFTPConnect({
        host: options.host,
        port: options.port,
        user: options.username,
        password: options.password,
        secure: options.protocol === 'ftps',
    })
}

const connectionsMap = new Map<string, Awaited<ReturnType<typeof createConnection>>>()

export async function ipcHandlerFTPConnect(
    _: IpcMainInvokeEvent,
    connection: ConnectionItem,
): Promise<IpcResponseMap[typeof IPC_METHODS.FTP_CONNECT]> {
    try {
        const id = crypto.randomUUID()
        createConnection(connection).then((c) => connectionsMap.set(id, c))
        return { ok: true, data: { connectionId: id } }
    } catch (error) {
        console.error(error)
        return { ok: false, code: 'error', errorText: 'Error while create connection' }
    }
}
