import { ipcMain } from 'electron'
import { ipcHandlerOpenConnection } from '@/features/connect-to-ftp/backend'
import { CHANNEL_FTP_CONNECT } from '@/features/connect-to-ftp'

export function registerIpcHandlers(): void {
    ipcMain.handle(CHANNEL_FTP_CONNECT, ipcHandlerOpenConnection)
}
