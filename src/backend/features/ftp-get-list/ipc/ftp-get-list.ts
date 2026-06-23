import { getFsItemsList } from '@/backend/features/ftp-get-list'
import { connectionsMap } from '@/backend/shared/api'
import { wrapIpcHandler } from '@/backend/shared/lib'
import { FTP_GET_LIST_METHOD_CHANNEL, FtpGetListMethod } from '../model/ftp-get-list.ipc-model'

export const ipcHandlerFtpGetList = wrapIpcHandler<FtpGetListMethod>(FTP_GET_LIST_METHOD_CHANNEL, async (_, props) => {
    const connection = connectionsMap.get(props.connectionId)
    if (!connection) {
        throw new Error(`Connection ${props.connectionId} not exists`)
    }
    return getFsItemsList({ connection, folder: props.folder })
})
