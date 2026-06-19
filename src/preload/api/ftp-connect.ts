import { ipcRenderer } from 'electron'
import { ConnectionItem } from '@/shared/model'
import { IPC_METHODS, IpcResponseMap } from '@/shared/ipc'

export function invokeFTPConnect(props: ConnectionItem): Promise<IpcResponseMap[typeof IPC_METHODS.FTP_CONNECT]> {
    return ipcRenderer.invoke(IPC_METHODS.FTP_CONNECT, props)
}
