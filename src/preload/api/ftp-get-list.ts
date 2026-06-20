import { ipcRenderer } from 'electron'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'

interface Props {
    connectionId: string
    folder: string
}

export function invokeFTPGetList(props: Props): Promise<IpcResponseMap[typeof IPC_METHODS.FTP_GET_LIST]> {
    return ipcRenderer.invoke(IPC_METHODS.FTP_GET_LIST, props)
}
