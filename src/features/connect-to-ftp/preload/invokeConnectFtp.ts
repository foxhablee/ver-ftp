import { ipcRenderer } from 'electron'
import type { ConnectionItem } from '@/entities/connection-item'
import { CHANNEL_FTP_CONNECT, type IpcResponseConnectFTP } from '../model/contract'

export function invokeConnectFtp(props: ConnectionItem): Promise<IpcResponseConnectFTP> {
    return ipcRenderer.invoke(CHANNEL_FTP_CONNECT, props)
}
