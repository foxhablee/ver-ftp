import { type BrowserWindow, ipcMain } from 'electron'
import { ipcHandlerOpenConnection } from '@/features/connect-to-ftp/backend'
import { CHANNEL_FTP_CONNECT } from '@/features/connect-to-ftp'
import { ipcHandlerCreateSubwindow } from '@/features/subwindow/backend'
import { CHANNEL_CREATE_SUBWINDOW } from '@/features/subwindow'

interface Props {
    parentWindow: BrowserWindow
}

export function registerIpcHandlers({ parentWindow }: Props): void {
    ipcMain.handle(CHANNEL_FTP_CONNECT, ipcHandlerOpenConnection)
    ipcMain.handle(CHANNEL_CREATE_SUBWINDOW, ipcHandlerCreateSubwindow({ parentWindow }))
}
