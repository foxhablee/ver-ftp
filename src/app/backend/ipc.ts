import { ipcMain } from 'electron'
import { IPC } from '@/shared/ipc/preload'
import { ipcConnectFTPHandler } from '@/features/connect-to-ftp/backend/ipcConnectFTPHandler'

export function registerIpcHandlers(): void {
    ipcMain.handle(IPC.FTP_CONNECT, ipcConnectFTPHandler)
}
