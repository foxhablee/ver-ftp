import { ipcRenderer } from 'electron'
import { ConnectionItem, RegisteredConnection } from '@/shared/model'
import { IPC_METHODS, IpcResponse } from '@/shared/ipc'

export function invokeFTPConnect(props: ConnectionItem): Promise<IpcResponse<Pick<RegisteredConnection, 'id'>>> {
    return ipcRenderer.invoke(IPC_METHODS.FTP_CONNECT, props)
}
