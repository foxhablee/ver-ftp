import { ipcRenderer } from 'electron'
import { ConnectionItem } from '@/entities/connection-item/backend'
import { IPC } from '@/shared/ipc/preload'
import { IpcResponseConnectFTP } from '../model/IpcResponseConnectFTP'

export function ipcConnectFTP(props: ConnectionItem): Promise<IpcResponseConnectFTP> {
    return ipcRenderer.invoke(IPC.FTP_CONNECT, props)
}
