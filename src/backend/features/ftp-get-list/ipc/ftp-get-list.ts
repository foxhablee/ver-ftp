import type { IpcMainInvokeEvent } from 'electron'
import { getFsItemsList } from '@/backend/features/ftp-get-list'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'
import { connectionsMap } from '@/backend/shared/api'

interface Props {
    connectionId: string
    folder: string
}

export async function ipcHandlerFtpGetList(
    _: IpcMainInvokeEvent,
    props: Props,
): Promise<IpcResponseMap[typeof IPC_METHODS.FTP_GET_LIST]> {
    try {
        const connection = connectionsMap.get(props.connectionId)
        if (!connection) {
            throw new Error(`Connection ${props.connectionId} not exists`)
        }

        const list = await getFsItemsList({ connection, folder: props.folder })
        return { ok: true, data: list }
    } catch (error) {
        console.error(error)
        return { ok: false, code: 'error', errorText: `Error while getting list of files in folder '${props.folder}'` }
    }
}
