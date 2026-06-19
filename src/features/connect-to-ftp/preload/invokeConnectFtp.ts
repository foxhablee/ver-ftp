import { ipcRenderer } from 'electron'
import { CHANNEL_FTP_CONNECT, type IpcResponseConnectFTP } from '../model/contract'
import { ConnectionItem } from '@/shared/model'

export function invokeConnectFtp(props: ConnectionItem): Promise<IpcResponseConnectFTP> {
    return ipcRenderer.invoke(CHANNEL_FTP_CONNECT, props)
}
