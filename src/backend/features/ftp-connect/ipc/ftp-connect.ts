import { connectionsMap } from '@/backend/shared/model'
import { createConnection } from '@/backend/features/ftp-connect'
import { wrapIpcHandler } from '@/backend/shared/lib'
import { FTP_CONNECT_METHOD_CHANNEL, FtpConnectMethod } from '../model/ftp-connect.ipc-model'

export const ipcHandlerFTPConnect = wrapIpcHandler<FtpConnectMethod>(
    FTP_CONNECT_METHOD_CHANNEL,
    async (_, connection) => {
        const id = crypto.randomUUID()
        const newConnection = await createConnection(connection)
        connectionsMap.set(id, newConnection)
        return { id }
    },
)
