import { type BrowserWindow, ipcMain } from 'electron'
import { pageRegistry } from '@/shared/model'
import { ipcHandlerFTPConnect } from '@/backend/features/ftp-connect'
import { ipcHandlerSubwindowCreate } from '@/backend/features/subwindow'
import { IPC_METHODS } from '@/shared/ipc'

interface Props {
    parentWindow: BrowserWindow
}

export function registerIpcHandlers({ parentWindow: parent }: Props): void {
    ipcMain.handle(IPC_METHODS.FTP_CONNECT, ipcHandlerFTPConnect)
    ipcMain.handle(IPC_METHODS.SUBWINDOW_CREATE, ipcHandlerSubwindowCreate({ parent, pageRegistry }))
}
