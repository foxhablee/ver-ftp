import { type BrowserWindow, ipcMain } from 'electron'
import { ipcHandlerCreateSubwindow } from '@/features/subwindow/backend'
import { CHANNEL_CREATE_SUBWINDOW } from '@/features/subwindow'
import { pageRegistry } from '../routing/pageRegistry'
import { ipcHandlerFTPConnect } from '@/backend/features/ftp-connect'
import { IPC_METHODS } from '@/shared/ipc'

interface Props {
    parentWindow: BrowserWindow
}

export function registerIpcHandlers({ parentWindow: parent }: Props): void {
    ipcMain.handle(IPC_METHODS.FTP_CONNECT, ipcHandlerFTPConnect)
    ipcMain.handle(CHANNEL_CREATE_SUBWINDOW, ipcHandlerCreateSubwindow({ parent, pageRegistry }))
}
