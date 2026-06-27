import { wrapIpcHandler } from '@/backend/shared/lib'
import { FTP_CONNECTIONS_LIST_CHANNEL, FtpConnectionsListMethod } from '../model/ftp-connect.ipc-model'
import { connectionsList } from '../api/connections-list'

export const ipcHandlerFtpConnectionsList = wrapIpcHandler<FtpConnectionsListMethod>(
    FTP_CONNECTIONS_LIST_CHANNEL,
    async () => {
        return connectionsList()
    },
)
